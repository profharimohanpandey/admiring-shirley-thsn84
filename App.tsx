import React, { useState } from 'react';

interface Question {
  id: number;
  query: string;
  answer: string;
}

const questions: Question[] = [
  { id: 1, query: 'What is the master project unit about?', answer: 'The master project unit is about developing a comprehensive project that showcases your skills and knowledge in your chosen field.' },
  { id: 2, query: 'How do I choose a project topic?', answer: 'You can choose a project topic by considering your interests, skills, and career goals. You can also consult with your lecturer or industry professionals for guidance.' },
  { id: 3, query: 'What are the project requirements?', answer: 'The project requirements include a written report, a presentation, and a working prototype or demonstration.' },
  { id: 4, query: 'How long does the project take to complete?', answer: 'The project typically takes 12-16 weeks to complete, depending on the complexity of the project and your work schedule.' },
  { id: 5, query: 'Can I work in a team?', answer: 'Yes, you can work in a team, but you will need to ensure that each team member contributes equally to the project and that you have a clear plan for collaboration and communication.' },
  { id: 6, query: 'How do I manage my time effectively?', answer: 'You can manage your time effectively by creating a project schedule, setting milestones, and prioritizing tasks.' },
  { id: 7, query: 'What resources are available to help me with my project?', answer: 'You have access to a range of resources, including your lecturer, industry professionals, and online materials.' },
  { id: 8, query: 'How do I conduct research for my project?', answer: 'You can conduct research for your project by reading academic papers, conducting surveys or interviews, and analyzing data.' },
  { id: 9, query: 'How do I write a project proposal?', answer: 'A project proposal should include an introduction, literature review, methodology, expected outcomes, and timeline.' },
  { id: 10, query: 'What is the assessment criteria for the project?', answer: 'The assessment criteria for the project include the quality of the written report, presentation, and prototype or demonstration.' },
  { id: 11, query: 'Can I get an extension on the project deadline?', answer: 'You can apply for an extension on the project deadline, but you will need to provide a valid reason and supporting documentation.' },
  { id: 12, query: 'How do I handle conflicts with team members?', answer: 'You can handle conflicts with team members by communicating openly and honestly, seeking mediation, and focusing on finding a solution that works for everyone.' },
  { id: 13, query: 'What is the role of the project supervisor?', answer: 'The project supervisor is responsible for guiding and supporting you throughout the project, providing feedback on your progress, and assessing your final submission.' },
  { id: 14, query: 'How do I prepare for the project presentation?', answer: 'You can prepare for the project presentation by practicing your delivery, preparing visual aids, and anticipating questions from the audience.' },
  { id: 15, query: 'What is the purpose of the project report?', answer: 'The purpose of the project report is to document your project, including the background, methodology, results, and conclusions.' },
  { id: 16, query: 'How do I ensure the quality of my project?', answer: 'You can ensure the quality of your project by following a structured approach, conducting regular reviews, and seeking feedback from others.' },
  { id: 17, query: 'What are the consequences of plagiarism?', answer: 'Plagiarism can result in serious consequences, including failure of the project, academic penalties, and damage to your reputation.' },
  { id: 18, query: 'How do I manage stress and pressure during the project?', answer: 'You can manage stress and pressure during the project by prioritizing tasks, taking regular breaks, and seeking support from friends, family, or a counselor.' },
  { id: 19, query: 'What is the role of the project client?', answer: 'The project client is responsible for providing guidance and feedback on the project, ensuring that the project meets their needs and expectations.' },
  { id: 20, query: 'How do I handle changes to the project scope?', answer: 'You can handle changes to the project scope by assessing the impact of the changes, negotiating with the client, and updating the project plan accordingly.' },
  { id: 21, query: 'What is the purpose of the project evaluation?', answer: 'The purpose of the project evaluation is to assess the success of the project, identify lessons learned, and provide recommendations for future improvements.' },
  { id: 22, query: 'How do I ensure the project is delivered on time?', answer: 'You can ensure the project is delivered on time by creating a realistic project schedule, prioritizing tasks, and monitoring progress regularly.' },
  { id: 23, query: 'What are the benefits of completing a master project unit?', answer: 'Completing a master project unit can help you develop advanced skills and knowledge, enhance your career prospects, and demonstrate your capabilities to potential employers.' },
  { id: 24, query: 'How do I get feedback on my project?', answer: 'You can get feedback on your project by seeking input from your lecturer, peers, and industry professionals, and by conducting self-assessment and reflection.' },
  { id: 25, query: 'What is the next step after completing the master project unit?', answer: 'After completing the master project unit, you can pursue further study, seek employment, or start your own business, depending on your career goals and aspirations.' },
];

const Chatbot = () => {
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(null);
  const [query, setQuery] = useState('');

  const handleQuestionClick = (question: Question) => {
    setSelectedQuestion(question);
  };

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const filteredQuestions = questions.filter((question) => question.query.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
      <h1 className="text-3xl font-bold mb-4">Master Project Unit Chatbot</h1>
      <input
        type="text"
        value={query}
        onChange={handleQueryChange}
        placeholder="Search for a question"
        className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
      />
      <div className="flex flex-wrap justify-center mb-4">
        {filteredQuestions.map((question) => (
          <button
            key={question.id}
            onClick={() => handleQuestionClick(question)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg m-2"
          >
            {question.query}
          </button>
        ))}
      </div>
      {selectedQuestion && (
        <div className="bg-gray-100 p-4 rounded-lg mb-4">
          <h2 className="text-2xl font-bold mb-2">{selectedQuestion.query}</h2>
          <p className="text-lg">{selectedQuestion.answer}</p>
        </div>
      )}
    </div>
  );
};

export default Chatbot;