import { Plane, Plus } from "lucide-react";
import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";

const ProcessAccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-semibold text-base md:text-lg transition-all hover:no-underline [&[data-state=open]_.icon-container]:rotate-45",
        className
      )}
      {...props}
    >
      <span className="text-left pr-4">{children}</span>
      <div className="icon-container shrink-0 bg-black text-white rounded-full p-1 transition-transform duration-200">
        <Plus className="h-4 w-4" strokeWidth={3} />
      </div>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
ProcessAccordionTrigger.displayName = "ProcessAccordionTrigger";

const steps = [
  {
    title: "1. InsightResolve learns your product, tools, and support workflows",
    content: "We learn how your organisation works so we can align with your goals and deliver exactly what your customers need. Our specialists become an extension of your team—supporting your customer‑experience priorities while working within your strategy, timelines, and budgets."
  },
  {
    title: "2. InsightResolve designs a customized solution for you within 2 weeks",
    content: "We'll design a customized solution tailored to your unique needs. This includes selecting the right talent, customizing training and onboarding, tailored CRM to suit your needs and integrating with your existing processes - optimized for you."
  },
  {
    title: "3. We review and assemble your dream team.",
    content: "We source candidates who truly fit your needs—screening, coordinating interviews, gathering your feedback, and refining the shortlist until you secure the perfect hire."
  },
  {
    title: "4. InsightResolve trains agents on your product, platforms, and escalation paths",
    content: "Our training, onboarding, and assessments integrate seamlessly with your existing processes while scaling to match your growth and adapting to your culture. We design tailored programmes that enhance and elevate the way you work."
  },
  {
    title: "5. Go Live & schedule check-ins!",
    content: "Curtains Up — your dedicated team is now fully live and ready to deliver. We’ll schedule check‑ins around your availability, not ours, giving you clear visibility into performance and the space to share feedback when it suits you. It’s a partnership built for transparency, momentum, and results."
  }
];

export function ProcessSection() {
  return (
    <section className="section-padding bg-[#fdfaf0] relative overflow-hidden">
      <div className="container-wide relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-4 mb-4 justify-center">
            <Plane className="w-8 h-8 md:w-10 md:h-10 text-foreground rotate-45" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
              Launch in 5 easy steps
            </h2>
          </div>
          <p className="text-lg md:text-xl text-foreground max-w-2xl text-center mx-auto">
            InsightResolve sources, trains, and assembles your new team in as little as 2 weeks. Once you go live, we continuously work to ensure you hit KPIs.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-24">
          <div className="w-full lg:w-1/2">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {steps.map((step, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white rounded-xl border-none shadow-sm px-6 py-2"
                >
                  <ProcessAccordionTrigger className="py-4">
                    {step.title}
                  </ProcessAccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-4">
                    {step.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Decorative Pattern Side */}
          <div className="hidden lg:flex w-full lg:w-1/2 justify-end items-center relative min-h-[400px]">
            <div className="grid grid-cols-4 gap-4 w-full max-w-[400px]">
              {Array.from({ length: 20 }).map((_, i) => {
                const isActive = [5, 6, 9, 10, 13, 14, 18, 19].includes(i);
                return (
                  <div
                    key={i}
                    className={`aspect-square rounded-full border-[6px] ${
                      isActive ? 'border-[#f6cc3e]' : 'border-[#f5ebcf]'
                    }`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
