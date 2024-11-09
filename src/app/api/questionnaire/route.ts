import { AddQuestionnaireResponse } from "@/lib/questionnaire";
import { newQuestionnaireResponseSchema } from "@/lib/types";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
    const data = await req.json();
    const newQuestionnaireResponse = newQuestionnaireResponseSchema.parse(data);

    await AddQuestionnaireResponse(newQuestionnaireResponse);

    return NextResponse.json({
        message: "Response submitted successfully",
    });
}
