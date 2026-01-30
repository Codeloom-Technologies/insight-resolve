import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { 
  AlertTriangle, 
  Clock, 
  ShieldX, 
  EyeOff, 
  FileX, 
  TrendingDown,
  Server,
  ArrowRight
} from 'lucide-react';

const problems = [
  {
    icon: AlertTriangle,
    title: 'Inconsistent Quality',
    description: 'Different handlers, different approaches, different outcomes. Quality varies wildly, putting compliance and customer satisfaction at risk.',
  },
  {
    icon: Clock,
    title: 'Slow Resolution',
    description: 'Cases drag on for weeks or months. Escalations increase. Customer frustration builds. Regulatory deadlines get missed.',
  },
  {
    icon: ShieldX,
    title: 'Lack of Compliance Awareness',
    description: 'Generic outsourcers don\'t understand regulatory requirements. Cases are handled without the compliance rigour your industry demands.',
  },
  {
    icon: EyeOff,
    title: 'Poor Visibility',
    description: 'You have no idea what\'s happening with your cases. Reporting is delayed, incomplete, or non-existent. Surprises become the norm.',
  },
  {
    icon: FileX,
    title: 'Generic Processes',
    description: 'One-size-fits-all approaches that don\'t account for your industry, your regulations, or your customers\' needs.',
  },
  {
    icon: TrendingDown,
    title: 'No Insights',
    description: 'You\'re drowning in complaints but have no visibility into root causes, trends, or opportunities for improvement.',
  },
  {
    icon: Server,
    title: 'Outdated Technology',
    description: 'Legacy systems, manual processes, spreadsheet chaos. Technology that creates problems rather than solving them.',
  },
];

export default function TheProblem() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-destructive/10 via-background to-background relative overflow-hidden">
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 text-destructive mb-6">
              <AlertTriangle className="w-4 h-4" />
              <span className="text-sm font-medium">The Problem</span>
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Traditional Outsourcing{' '}
              <span className="text-destructive">Isn't Working</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Organisations are struggling with rising complaint volumes, stricter regulations, 
              and outdated systems. The traditional approach to complaint handling is broken.
            </p>
          </div>
        </div>
      </section>

      {/* Problems Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {problems.map((problem) => (
              <div 
                key={problem.title} 
                className="bg-card rounded-xl p-8 border border-destructive/20 hover:border-destructive/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center text-destructive mb-6">
                  <problem.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{problem.title}</h3>
                <p className="text-muted-foreground">{problem.description}</p>
              </div>
            ))}
          </div>

          {/* Transition to Solution */}
          <div className="max-w-3xl mx-auto text-center bg-secondary/50 rounded-2xl p-8 lg:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              There's a Better Way
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              InsightResolve was built to solve these exact problems. Smart technology, 
              compliance expertise, and a genuine partnership approach.
            </p>
            <Button variant="accent" size="lg" asChild>
              <Link to="/our-solution">
                See Our Solution
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
