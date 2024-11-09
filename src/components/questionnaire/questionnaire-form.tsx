"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, UseFormReturn } from "react-hook-form";
import ClipLoader from "react-spinners/ClipLoader";

import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "@/components/ui/card";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    NewQuestionnaireResponse,
    newQuestionnaireResponseSchema,
} from "@/lib/types";
import QuestionnaireCategory from "./questionnaire-category";
import QuestionnaireQuestion from "./questionnaire-question";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";

const QuestForm = ({
    isSubmitting,
    hasSubmitted,
    onSubmit,
}: {
    isSubmitting: boolean;
    hasSubmitted: boolean;
    onSubmit: (data: NewQuestionnaireResponse) => Promise<void>;
}) => {
    const form = useForm<NewQuestionnaireResponse>({
        resolver: zodResolver(newQuestionnaireResponseSchema),
        defaultValues: {
            companyName: "",
        },
    });
    if (isSubmitting) {
        return (
            <div className="flex justify-center">
                <ClipLoader />
            </div>
        );
    }

    if (hasSubmitted) {
        return (
            <div className="flex justify-center">
                <h2>Thank you for answering!</h2>
            </div>
        );
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="companyName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Company Name</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <QuestionnaireCategory category="Work Satisfaction">
                    <QuestionnaireQuestion
                        question="Do you enjoy your work?"
                        scale="(1 = Not at all, 5 = Yes)"
                        name="satisfactionWorkEnjoyment"
                        form={form}
                    />
                    <QuestionnaireQuestion
                        question="Do you feel recognized for your work?"
                        scale="(1 = Not at all, 5 = Yes)"
                        name="satisfactionWorkRecognition"
                        form={form}
                    />
                </QuestionnaireCategory>

                <QuestionnaireCategory category="Work Environment">
                    <QuestionnaireQuestion
                        question="Are you satisfied with the furniture in the office?"
                        scale="(1 = Not at all, 5 = Yes)"
                        name="workplaceFurniture"
                        form={form}
                    />
                    <QuestionnaireQuestion
                        question="Do you have adequate options for remote work?"
                        scale="(1 = Not at all, 5 = Yes)"
                        name="workplaceRemoteWork"
                        form={form}
                    />
                </QuestionnaireCategory>

                <QuestionnaireCategory category="Management Satisfaction">
                    <QuestionnaireQuestion
                        question="Are you satisfied with management overall?"
                        scale="(1 = Not at all, 5 = Very)"
                        name="managementOverall"
                        form={form}
                    />
                    <QuestionnaireQuestion
                        question="How satisfied are you with the feedback from management?"
                        scale="(1 = Not at all, 5 = Very)"
                        name="managementFeedback"
                        form={form}
                    />
                </QuestionnaireCategory>

                <QuestionnaireCategory category="Work-Life Balance">
                    <QuestionnaireQuestion
                        question="How often do you feel stressed at work?"
                        scale="(1 = Not at all, 5 = Yes)"
                        name="worklifeBalanceStress"
                        form={form}
                    />
                    <QuestionnaireQuestion
                        question="How flexible is your work schedule?"
                        scale="(1 = Not at all, 5 = Yes)"
                        name="worklifeBalanceFlexibility"
                        form={form}
                    />
                </QuestionnaireCategory>

                <QuestionnaireCategory category="Career Growth">
                    <QuestionnaireQuestion
                        question="Do you see growth opportunities in your role?"
                        scale="(1 = Not at all, 5 = Yes)"
                        name="careerGrothOpportunities"
                        form={form}
                    />
                    <QuestionnaireQuestion
                        question="Do you feel there are promotion opportunities?"
                        scale="(1 = Not at all, 5 = Yes)"
                        name="careerGrowthPromotions"
                        form={form}
                    />
                </QuestionnaireCategory>

                <Button type="submit" className="w-full">
                    Submit Survey
                </Button>
            </form>
        </Form>
    );
};

const QuestionnaireForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(true);
    const [hasSubmitted, setHasSubmitted] = useState(false);

    const { toast } = useToast();

    useEffect(() => {
        setIsSubmitting(false);
    }, []);

    const onSubmit = async (data: NewQuestionnaireResponse) => {
        setIsSubmitting(true);
        try {
            const response = await fetch("/api/questionnaire", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error("Failed to submit survey");
            }

            toast({
                title: "Survey Submitted",
                description: "Thank you for your feedback!",
            });
            setHasSubmitted(true);
        } catch (error) {
            console.error("Error submitting survey:", error);
            toast({
                title: "Error",
                description: "Failed to submit survey. Please try again.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <main className="container mx-auto px-4 py-8">
                <Card className="max-w-3xl mx-auto">
                    <CardHeader>
                        <CardTitle>Job Satisfaction Survey</CardTitle>
                        <CardDescription>
                            Help us understand your workplace experience
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <QuestForm
                            isSubmitting={isSubmitting}
                            hasSubmitted={hasSubmitted}
                            onSubmit={onSubmit}
                        />
                    </CardContent>
                </Card>
            </main>
        </div>
    );
};

export default QuestionnaireForm;
