import { z } from "zod";

// Questionnaire
const ratingSchema = z.coerce.number().int().min(1).max(5);

export const newQuestionnaireResponseSchema = z.object({
    companyName: z.string().min(3),

    satisfactionWorkEnjoyment: ratingSchema,
    satisfactionWorkRecognition: ratingSchema,

    workplaceFurniture: ratingSchema,
    workplaceRemoteWork: ratingSchema,

    managementOverall: ratingSchema,
    managementFeedback: ratingSchema,

    worklifeBalanceStress: ratingSchema,
    worklifeBalanceFlexibility: ratingSchema,

    careerGrothOpportunities: ratingSchema,
    careerGrowthPromotions: ratingSchema,
});

export type NewQuestionnaireResponse = z.infer<
    typeof newQuestionnaireResponseSchema
>;

export type QuestionnaireCategory =
    | "satisfactionWork"
    | "workplace"
    | "management"
    | "worklifeBalance"
    | "careerGrowth";

// Company

export type Company = {
    name: string;
    thriveScore: number;
};
