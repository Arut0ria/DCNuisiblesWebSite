type SectionProps = React.HTMLAttributes<HTMLElement> & {
  children: React.ReactNode;
};

function Section({ children, ...props }: SectionProps) {
  return (<section className="
    h-lvh flex
  " {...props}>
    <div className="
      flex justify-center items-center
      w-lvw
    ">
      {children}
    </div>
  </section>);
}

export default Section;