import { GetCompanies } from "@/lib/companies";
import { NextRequest, NextResponse } from "next/server";

export async function GET(_: NextRequest) {
    const companies = await GetCompanies();

    return NextResponse.json({
        companies: companies,
    });
}
