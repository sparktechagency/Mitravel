import React from 'react';

interface ComparisonItem {
  title: string;
  description: string;
}

interface ComparisonData {
  problems: ComparisonItem[];
  solutions: ComparisonItem[];
}

const ProblemSolutionComparison: React.FC = () => {
  const data: ComparisonData = {
    problems: [
      {
        title: "Complex Redemption",
        description: "Multiple loyalty programs with confusing rules and restrictions"
      },
      {
        title: "Poor Availability",
        description: "Limited reward seat inventory and blackout dates"
      },
      {
        title: "Wasted Value",
        description: "$50B annually in unused reward points expire"
      },
      {
        title: "Lost Time",
        description: "Manual process that failed to deliver bookings"
      }
    ],
    solutions: [
      {
        title: "Intuitive Interface",
        description: "Easy chat bot & voice"
      },
      {
        title: "AI-Powered Optimization",
        description: "Machine learning algorithms find best reward combinations"
      },
      {
        title: "Multi-Program Search",
        description: "Searches across all loyalty programs simultaneously"
      },
      {
        title: "Seamless Booking",
        description: "One-click booking with optimal point redemption"
      }
    ]
  };

  const ComparisonCard: React.FC<{ item: ComparisonItem; type: 'problem' | 'solution' }> = ({ item, type }) => (
    <div
      className={`p-4 rounded-lg mb-4 ${
        type === 'problem'
          ? 'bg-gradient-to-br from-[#94a0d47a] to-[#FFFFFF]'
          : 'bg-gradient-to-br from-[#85f081a4] to-[#FFFFFF]'
      }`}
    >
      <h3 className="font-semibold mb-2 text-black">
        {item.title}
      </h3>
      <p className="text-sm leading-relaxed text-black">
        {item.description}
      </p>
    </div>
  );

  return (
    <div className="xl:container w-[98%] mx-auto px-2 md:px-6 bg-white  py-5 md:py-10 lg:py-20">
      <div className="xl:w-[90%] mx-auto grid md:grid-cols-2 gap-10">
        {/* Problems Section */}
        <div>
          <h2 className="text-2xl mb-6">
            The<br />
            <span className="text-3xl font-bold text-gray-800">Problem</span>
          </h2>
          <div className="space-y-5 md:space-y-10">
            {data.problems.map((problem, index) => (
              <ComparisonCard
                key={`problem-${index}`}
                item={problem}
                type="problem"
              />
            ))}
          </div>
        </div>

        {/* Solutions Section */}
        <div>
          <h2 className="text-2xl   mb-6">
            Our<br />
            <span className="text-3xl font-bold text-gray-800">Solution</span>
          </h2>
          <div className="space-y-5 md:space-y-10">
            {data.solutions.map((solution, index) => (
              <ComparisonCard
                key={`solution-${index}`}
                item={solution}
                type="solution"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemSolutionComparison;
