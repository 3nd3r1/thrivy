import QuestionnaireForm from "@/components/questionnaire/questionnaire-form";

const Questionnaire = () => {
    return (
        <div className="mt-8">
            <h1 className="text-2xl font-bold text-center mb-4">
                Job Satisfaction Questionnaire
            </h1>
            <QuestionnaireForm />
        </div>
    );
};

export default Questionnaire;
