import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BarChart2, Brain, Lightbulb, Users } from "lucide-react";

import Hero from "@/components/hero";

const Home = () => {
    return (
        <>
            <Hero />
            <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
                <main className="container mx-auto px-4 py-16">
                    <section className="text-center mb-16">
                        <h1 className="text-5xl font-bold mb-4 text-blue-800">
                            Redefine Your Workplace Experience
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            Uncover insights. Drive change. Shape the future of
                            work.
                        </p>
                        <Button asChild size="lg" className="text-lg px-8 py-6">
                            <Link href="/questionnaire">
                                Take the Survey <ArrowRight className="ml-2" />
                            </Link>
                        </Button>
                    </section>

                    <section className="grid md:grid-cols-2 gap-8 mb-16">
                        <Card className="bg-white/50 backdrop-blur-sm border-blue-200 hover:shadow-lg transition-shadow">
                            <CardContent className="p-6">
                                <Brain className="w-12 h-12 text-blue-600 mb-4" />
                                <h2 className="text-2xl font-semibold mb-2 text-blue-800">
                                    Thought-Provoking Questions
                                </h2>
                                <p className="text-gray-600">
                                    Answer a short questionnaire about your work
                                    environments then see how you compare to
                                    others.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="bg-white/50 backdrop-blur-sm border-blue-200 hover:shadow-lg transition-shadow">
                            <CardContent className="p-6">
                                <BarChart2 className="w-12 h-12 text-blue-600 mb-4" />
                                <h2 className="text-2xl font-semibold mb-2 text-blue-800">
                                    Data-Driven Insights
                                </h2>
                                <p className="text-gray-600">
                                    See actual data on how companies are
                                    performing in different areas of workplace
                                    satisfaction.
                                </p>
                            </CardContent>
                        </Card>
                    </section>

                    <section className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4 text-blue-800">
                            Why Your Voice Matters
                        </h2>
                        <p className="text-xl text-gray-600 mb-8">
                            Every response shapes the landscape of workplace
                            satisfaction. Be part of the change.
                        </p>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div>
                                <Users className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold mb-2 text-blue-800">
                                    Collective Impact
                                </h3>
                                <p className="text-gray-600">
                                    The most important information comes from
                                    the employees not the company.
                                </p>
                            </div>
                            <div>
                                <Lightbulb className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold mb-2 text-blue-800">
                                    Inspire Change
                                </h3>
                                <p className="text-gray-600">
                                    Vote for us if you love <strong>brainrot</strong>!
                                </p>
                            </div>
                            <div>
                                <Brain className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold mb-2 text-blue-800">
                                    Self-Reflection
                                </h3>
                                <p className="text-gray-600">
                                    Gain insights into your own work preferences
                                    and satisfaction drivers.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="text-center">
                        <h2 className="text-3xl font-bold mb-4 text-blue-800">
                            Ready to Make Your Mark?
                        </h2>
                        <p className="text-xl text-gray-600 mb-8">
                            Your journey to reshaping the workplace starts with
                            a single click.
                        </p>
                        <Button asChild size="lg" className="text-lg px-8 py-6">
                            <Link href="/questionnaire">
                                Start the Survey <ArrowRight className="ml-2" />
                            </Link>
                        </Button>
                    </section>
                </main>
                <footer className="bg-blue-800 text-white py-8 mt-16">
                    <div className="container mx-auto px-4 text-center">
                        <p>&copy; 2024 Thrivy. All rights reserved.</p>
                        <p className="mt-2">
                            Empowering workplaces through data-driven insights.
                        </p>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default Home;
