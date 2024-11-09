import connectToDatabase from "@/lib/database";
import { NewQuestionnaireResponse } from "@/lib/types";
import QuestionnaireResponse from "@/lib/models/questionnaire-response";

export const AddQuestionnaireResponse = async (
    newQuestionnaireResponse: NewQuestionnaireResponse
) => {
    await connectToDatabase();
    const questionnaireResponse = await QuestionnaireResponse.create(newQuestionnaireResponse);
    return questionnaireResponse;
};

export const GetQuestionnaireResponses = () => {
    return QuestionnaireResponse.find();
}
