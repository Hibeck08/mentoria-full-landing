interface NumberStatProps {
  number: string;
  label: string;
  icon?: React.ReactNode;
}

export const NumberStat = ({ number, label, icon }: NumberStatProps) => {
  return (
    <div className="bg-card/50 backdrop-blur-sm border border-accent/20 rounded-3xl p-8 hover:bg-card/70 hover:border-accent/40 transition-all duration-300 hover:shadow-premium text-center">
      {icon && (
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center">
            {icon}
          </div>
        </div>
      )}
      <div className="text-5xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
        {number}
      </div>
      <p className="text-lg text-muted-foreground">{label}</p>
    </div>
  );
};
