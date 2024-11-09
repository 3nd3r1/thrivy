import { getCompanies } from "@/lib/companies";
import { NextRequest, NextResponse } from "next/server";

export async function GET(_: NextRequest) {
    const companies = await getCompanies();

    return NextResponse.json({
        companies: companies,
    });
}
