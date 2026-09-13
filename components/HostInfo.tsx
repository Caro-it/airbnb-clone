interface HostInfoProps {
  name: string;
  yearsHosting: number;
}

const HostInfo = ({ name, yearsHosting }: HostInfoProps) => {
  return (
    <section className="flex items-center gap-3 border-b border-gray-200 py-6">
      <div
        aria-hidden
        className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-300 text-lg font-semibold text-gray-600"
      >
        {name.charAt(0)}
      </div>
      <div>
        <p className="font-semibold text-gray-900">Anfitrión: {name}</p>
        <p className="text-sm text-gray-500">{yearsHosting} años como anfitrión</p>
      </div>
    </section>
  );
};

export default HostInfo;