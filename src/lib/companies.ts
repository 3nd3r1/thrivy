import { GetQuestionnaireResponses } from "@/lib/questionnaire";
import { Company, QuestionnaireCategory } from "@/lib/types";
import { IQuestionnaireResponse } from "@/lib/models/questionnaire-response";
import connectToDatabase from "./database";

const weights: Map<QuestionnaireCategory, number> = new Map<
    QuestionnaireCategory,
    number
>([
    ["satisfactionWork", 1],
    ["workplace", 1],
    ["management", 1],
    ["worklifeBalance", 1],
    ["careerGrowth", 1],
]);

const calculateCategoryScore = (
    category: QuestionnaireCategory,
    questionnaireResponse: IQuestionnaireResponse
) => {
    switch (category) {
        case "satisfactionWork":
            return (
                (questionnaireResponse.satisfactionWorkEnjoyment * 20 +
                    questionnaireResponse.satisfactionWorkRecognition * 20) /
                2
            );
        case "workplace":
            return (
                (questionnaireResponse.workplaceFurniture * 20 +
                    questionnaireResponse.workplaceRemoteWork * 20) /
                2
            );
        case "management":
            return (
                (questionnaireResponse.managementOverall * 20 +
                    questionnaireResponse.managementFeedback * 20) /
                2
            );
        case "worklifeBalance":
            return (
                ((6 - questionnaireResponse.worklifeBalanceStress) * 20 +
                    questionnaireResponse.worklifeBalanceFlexibility * 20) /
                2
            );
        case "careerGrowth":
            return (
                (questionnaireResponse.careerGrothOpportunities * 20 +
                    questionnaireResponse.careerGrowthPromotions * 20) /
                2
            );
    }
};

const calculateThriveScore = (
    questionnaireResponse: IQuestionnaireResponse
) => {
    return (
        (calculateCategoryScore("satisfactionWork", questionnaireResponse) *
            (weights.get("satisfactionWork") || 1) +
            calculateCategoryScore("workplace", questionnaireResponse) *
                (weights.get("workplace") || 1) +
            calculateCategoryScore("management", questionnaireResponse) *
                (weights.get("management") || 1) +
            calculateCategoryScore("worklifeBalance", questionnaireResponse) *
                (weights.get("worklifeBalance") || 1) +
            calculateCategoryScore("careerGrowth", questionnaireResponse) *
                (weights.get("careerGrowth") || 1)) /
        5
    );
};

export const GetCompanies = async () => {
    await connectToDatabase();
    const companyScores: Map<string, number[]> = new Map<string, number[]>();

    const questionnaireResponses = await GetQuestionnaireResponses();

    questionnaireResponses.forEach((questionnaireResponse) => {
        const companyName = questionnaireResponse.companyName;
        const thriveScore = calculateThriveScore(questionnaireResponse);

        if (companyScores.has(companyName)) {
            companyScores.set(companyName, [
                ...(companyScores.get(companyName) as number[]),
                thriveScore,
            ]);
        } else {
            companyScores.set(companyName, [thriveScore]);
        }
    });
    const companies: Company[] = [];

    companyScores.forEach((scores, companyName) => {
        const averageScore =
            scores.reduce((acc, score) => acc + score, 0) / scores.length;

        companies.push({ name: companyName, thriveScore: averageScore });
    });

    return companies;
};
