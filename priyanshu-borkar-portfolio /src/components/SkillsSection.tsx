import React, { useState } from 'react';
import { 
  Code2, 
  BarChart3, 
  PieChart, 
  Cpu, 
  Database, 
  GitBranch, 
  Sparkles,
  ArrowRight,
  TrendingUp,
  Layers,
  Terminal,
  Activity
} from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedTopic, setSelectedTopic] = useState<number | null>(null);

  const skillGroups = [
    {
      category: 'Programming',
      icon: <Code2 className="w-4 h-4 text-sky-400" />,
      skills: [
        { name: 'Python', role: 'Primary analytical and scripting language' },
        { name: 'SQL', role: 'Relational data query design and aggregation' },
        { name: 'Java', role: 'Object-oriented programming concepts' },
      ],
    },
    {
      category: 'Data Analytics',
      icon: <BarChart3 className="w-4 h-4 text-emerald-400" />,
      skills: [
        { name: 'Excel', role: 'Structured workbooks, functions & pivot tables' },
        { name: 'Pandas', role: 'Dataframe manipulation, filtering & cleaning' },
        { name: 'NumPy', role: 'Vectorized computational numerical arrays' },
        { name: 'Matplotlib', role: 'Exploratory data visualization and plots' },
        { name: 'Data Analysis', role: 'Pattern identification and structured EDA' },
        { name: 'Data Visualization', role: 'Translating numbers into visual charts' },
        { name: 'Statistics', role: 'Descriptive metrics & analytical probability' },
      ],
    },
    {
      category: 'Business Intelligence',
      icon: <PieChart className="w-4 h-4 text-amber-400" />,
      skills: [
        { name: 'Power BI', role: 'Active learning: interactive dashboards and KPI reports' },
      ],
    },
    {
      category: 'AI / Machine Learning',
      icon: <Cpu className="w-4 h-4 text-indigo-400" />,
      skills: [
        { name: 'Artificial Intelligence', role: 'Algorithmic reasoning & computer vision models' },
        { name: 'Machine Learning Fundamentals', role: 'Supervised/unsupervised models & evaluation' },
      ],
    },
    {
      category: 'Core Concepts',
      icon: <Database className="w-4 h-4 text-cyan-400" />,
      skills: [
        { name: 'DBMS', role: 'Database design, normalization & ACID principles' },
        { name: 'Problem Solving', role: 'Analytical decomposition of complex challenges' },
      ],
    },
    {
      category: 'Development',
      icon: <GitBranch className="w-4 h-4 text-rose-400" />,
      skills: [
        { name: 'HTML & CSS', role: 'Semantic structure, styling & layouts' },
        { name: 'JavaScript & React.js', role: 'Interactive user interface development' },
        { name: 'Git & GitHub', role: 'Version control, commit hygiene & code hosting' },
      ],
    },
  ];

  const currentlyBuilding = [
    {
      title: 'Python Data Libraries',
      focus: 'Deepening idiomatic usage of Pandas & NumPy for data workflows',
      category: 'Core Analytics',
    },
    {
      title: 'Power BI',
      focus: 'Modeling business dashboards, DAX queries, and KPI storytelling',
      category: 'BI & Reporting',
    },
    {
      title: 'Business Analytics',
      focus: 'Case-study frameworks, market metrics, and ROI-oriented analysis',
      category: 'Strategy',
    },
    {
      title: 'Advanced SQL',
      focus: 'Window functions, CTEs, indexing, and complex relational joins',
      category: 'Data Engineering',
    },
    {
      title: 'Statistics',
      focus: 'Hypothesis testing, variance analysis, and statistical distributions',
      category: 'Mathematics',
    },
    {
      title: 'DSA with Python',
      focus: 'Algorithmic efficiency, time complexity, and data structures',
      category: 'Computer Science',
    },
    {
      title: 'Machine Learning Fundamentals',
      focus: 'Classification, regression curves, and model validation techniques',
      category: 'Applied AI',
    },
    {
      title: 'Data Visualization',
      focus: 'Communicating analytical discoveries through clean information design',
      category: 'Communication',
    },
    {
      title: 'Exploring Cloud Computing',
      focus: 'Understanding cloud data stores and modern compute architecture',
      category: 'Infrastructure',
    },
  ];

  const filteredGroups = activeCategory === 'All' 
    ? skillGroups 
    : skillGroups.filter(g => g.category === activeCategory);

  return (
    <section id="skills" className="py-20 sm:py-28 border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-sky-400 uppercase tracking-widest">
            <Layers className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            What I Work With
          </h2>
          <p className="text-slate-400 text-base max-w-2xl">
            A categorized foundation across programming, data analytics, business intelligence, machine learning, and core computer science.
          </p>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#0d1016] border border-white/5 rounded-md mb-10">
          <button
            onClick={() => setActiveCategory('All')}
            className={`px-3 py-1.5 text-xs font-medium rounded-sm transition-colors cursor-pointer ${
              activeCategory === 'All'
                ? 'bg-sky-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            All Disciplines
          </button>
          {skillGroups.map((g) => (
            <button
              key={g.category}
              onClick={() => setActiveCategory(g.category)}
              className={`px-3 py-1.5 text-xs font-medium rounded-sm transition-colors cursor-pointer ${
                activeCategory === g.category
                  ? 'bg-sky-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {g.category}
            </button>
          ))}
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredGroups.map((group) => (
            <div
              key={group.category}
              className="bg-[#0f131a] border border-white/5 rounded-md p-6 flex flex-col justify-between hover:border-white/15 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/5 mb-4">
                  <div className="flex items-center gap-2">
                    {group.icon}
                    <h3 className="text-sm font-bold text-white tracking-tight">
                      {group.category}
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono text-slate-500">
                    {group.skills.length} competencies
                  </span>
                </div>

                <div className="space-y-3">
                  {group.skills.map((skill) => (
                    <div key={skill.name} className="space-y-0.5">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                        {group.category === 'Business Intelligence' && (
                          <span className="text-[10px] font-mono text-amber-400">
                            Learning Focus
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {skill.role}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* "Currently Building" Evolving Journey Section */}
        <div className="bg-[#0b0e14] border border-sky-500/20 rounded-lg p-6 sm:p-8 relative overflow-hidden">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/5 mb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-sky-400 uppercase tracking-wider">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>Continuous Growth Roadmap</span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white mt-1">
                Currently Building
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                An active pathway of analytical exploration, algorithm review, and business tooling.
              </p>
            </div>

            <div className="text-[11px] font-mono text-slate-400 bg-black/30 border border-white/5 px-3 py-1.5 rounded self-start sm:self-auto">
              Ongoing Study & Practice
            </div>
          </div>

          {/* Interactive Learning Pathway Nodes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {currentlyBuilding.map((item, idx) => {
              const isSelected = selectedTopic === idx;
              return (
                <div
                  key={item.title}
                  onClick={() => setSelectedTopic(isSelected ? null : idx)}
                  className={`p-3.5 rounded-sm border cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-[#151a24] border-sky-500/50 shadow-md ring-1 ring-sky-500/20'
                      : 'bg-white/[0.02] border-white/5 hover:border-white/15'
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] font-mono mb-1.5">
                    <span className="text-sky-400 font-semibold">0{idx + 1}</span>
                    <span className="text-slate-500">{item.category}</span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-semibold text-slate-200">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    {item.focus}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Bottom Philosophy Note */}
          <div className="mt-6 pt-4 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-400">
            <span>Focused on deliberate practice, structured data pipelines, and actionable business intelligence.</span>
            <a
              href="https://github.com/priyanshuborkar88-sudo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 hover:text-sky-300 font-medium inline-flex items-center gap-1"
            >
              <span>Review Code on GitHub</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
