const ThriveScore = ({ thriveScore }: { thriveScore: number }) => {
    const color =
        thriveScore > 70
            ? "text-green-500"
            : thriveScore > 50
              ? "text-orange-500"
              : "text-red-500";

    return <span className={`font-bold ${color}`}>{thriveScore}</span>;
};

export default ThriveScore;
