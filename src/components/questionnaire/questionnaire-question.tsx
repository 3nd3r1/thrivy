import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { ControllerRenderProps } from "react-hook-form";

const QuestionOptions = ({ field }: { field: ControllerRenderProps }) => (
    <RadioGroup
        onValueChange={field.onChange}
        defaultValue={field.value}
        className="flex justify-between space-x-2"
    >
        {[1, 2, 3, 4, 5].map((num) => (
            <FormItem key={num} className="flex flex-col">
                <FormLabel className="mt-1 text-sm text-center">
                    {num}
                </FormLabel>
                <FormControl>
                    <RadioGroupItem
                        value={num.toString()}
                        className="w-8 h-8 border-2 border-primary"
                    />
                </FormControl>
            </FormItem>
        ))}
    </RadioGroup>
);
const QuestionnaireQuestion = ({
    question,
    scale,
    name,
    form,
}: {
    question: string;
    scale: string;
    name: string;
    form: any;
}) => (
    <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
            <FormItem>
                <div className="flex flex-col">
                    <FormLabel className="font-bold text-lg text-center">{question}</FormLabel>
                    <span className="text-xs">{scale}</span>
                </div>
                <FormControl>
                    <QuestionOptions field={field} />
                </FormControl>
                <FormMessage />
            </FormItem>
        )}
    />
);

export default QuestionnaireQuestion;
