import Icon from "$store/components/ui/Icon.tsx";

export interface Props {
  title: string;
  description: string;
  benefits: Array<BenefitProps>;
}

export interface BenefitProps {
  title: string;
  description: string;
}

function Benefit({ title, description }: BenefitProps) {
  return (
    <div className="">
      <Icon id="Deco" /> <h3>{title}</h3> <p>{description}</p>
    </div>
  );
}

function Benefits({ title, description, benefits }: Props) {
  return (
    <section className="">
      <h2 className="text-base-50 text-center text-4xl">{title}</h2>
      <p className="text-center text-2xl">{description}</p>
      {benefits?.map((benefit) => (
        <Benefit
          key={benefit.title}
          title={benefit.title}
          description={benefit.description}
        />
      ))}
    </section>
  );
}

export default Benefits;
