const QuestionnaireCategory = ({
    category,
    children,
}: {
    category: string;
    children: React.ReactNode;
}) => (
    <div key={category} className="space-y-6">
        <h3 className="text-xl font-semibold">{category}</h3>
        <div className="flex flex-col gap-4">
        {children}
        </div>
    </div>
);

export default QuestionnaireCategory;
