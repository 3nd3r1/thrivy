import { calculateThriveScore } from "@/lib/companies";
import { addQuestionnaireResponse } from "@/lib/questionnaire";
import { newQuestionnaireResponseSchema } from "@/lib/types";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const data = await req.json();
    const newQuestionnaireResponse = newQuestionnaireResponseSchema.parse(data);

    const questionnaireResponse = await addQuestionnaireResponse(
        newQuestionnaireResponse
    );

    const thriveScore = calculateThriveScore(questionnaireResponse);

    return NextResponse.json({
        message: "Response submitted successfully",
        thriveScore: thriveScore
    });
}
