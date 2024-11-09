import Link from "next/link";

const Hero = () => {
    return (
        <div
            className="relative h-screen bg-cover bg-center"
            style={{ backgroundImage: "url('/header.webp')" }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Content */}
            <div className="relative flex items-center justify-center h-full px-4 text-center text-white z-10">
                <div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Welcome to Thrivy
                    </h1>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
                        Redefine your workplace experience. Uncover insights.
                        Drive change. Shape the future of work.
                    </p>
                    <Link
                        href="/questionnaire"
                        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-lg font-semibold transition"
                    >
                        Take the Questionnaire
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default Hero;
