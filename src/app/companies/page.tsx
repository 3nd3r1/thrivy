"use client";

import { useState, useEffect } from "react";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Company } from "@/lib/types";
import ClipLoader from "react-spinners/ClipLoader";

const Companies = () => {
    const [companies, setCompanies] = useState<Company[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                const response = await fetch("/api/companies");
                if (!response.ok) {
                    throw new Error("Failed to fetch company data");
                }
                const data = await response.json();
                setCompanies(data.companies);
            } catch (err) {
                setError(
                    "Failed to load company data. Please try again later."
                );
            } finally {
                setIsLoading(false);
            }
        };

        fetchCompanies();
    }, []);

    if (isLoading) {
        return (
            <div>
                <ClipLoader />
            </div>
        );
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>Company Ratings</CardTitle>
                <CardDescription>
                    See how companies compare based on employee satisfaction
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Rank</TableHead>
                            <TableHead>Company</TableHead>
                            <TableHead>ThriveScore</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {Array.from(companies).sort((c1,c2) => c2.thriveScore - c1.thriveScore).map((company, index) => (
                            <TableRow key={company.name}>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell className="font-medium">
                                    {company.name}
                                </TableCell>
                                <TableCell>
                                    {company.thriveScore.toFixed(2)}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
};

export default Companies;
