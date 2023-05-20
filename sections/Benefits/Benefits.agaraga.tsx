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
    <div className="bg-blue-400 flex flex-col items-center p-6 mx-4 lg:w-72">
      <Icon id="Deco" width={30} height={30} />
      <h3 className=" text-base-100 text-xl mb-2">{title}</h3>
      <p className="text-base-100 text-sm">{description}</p>
    </div>
  );
}

function Benefits({ title, description, benefits }: Props) {
  return (
    <section className="py-10 px-12 bg-red-400">
      <h2 className="text-base-content text-center text-4xl mb-2">{title}</h2>
      <p className="text-neutral text-center text-2xl mb-10">{description}</p>
      <div className="flex justify-center">
        <div className="flex mx-auto bg-blue-100">
          {benefits?.map((benefit) => (
            <Benefit
              key={benefit.title}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
