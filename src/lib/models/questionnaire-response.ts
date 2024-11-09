import mongoose, { Schema} from "mongoose";

export interface IQuestionnaireResponse {
    companyName: string;

    satisfactionWorkEnjoyment: number;
    satisfactionWorkRecognition: number;
    
    workplaceFurniture: number;
    workplaceRemoteWork: number;

    managementOverall: number;
    managementFeedback: number;

    worklifeBalanceStress: number;
    worklifeBalanceFlexibility: number;

    careerGrothOpportunities: number;
    careerGrowthPromotions: number;
}

const questionnaireResponseSchema: Schema = new Schema<IQuestionnaireResponse>({
    companyName: { type: String, required: true },

    satisfactionWorkEnjoyment: { type: Number, required: true },
    satisfactionWorkRecognition: { type: Number, required: true },

    workplaceFurniture: { type: Number, required: true },
    workplaceRemoteWork: { type: Number, required: true },

    managementOverall: { type: Number, required: true },
    managementFeedback: { type: Number, required: true },

    worklifeBalanceStress: { type: Number, required: true },
    worklifeBalanceFlexibility: { type: Number, required: true },

    careerGrothOpportunities: { type: Number, required: true },
    careerGrowthPromotions: { type: Number, required: true },
});

export default mongoose.models.QuestionnaireResponse ||
    mongoose.model<IQuestionnaireResponse>("QuestionnaireResponse", questionnaireResponseSchema);
