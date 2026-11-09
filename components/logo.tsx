export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2 sm:gap-2.5">
      <img
        src={light ? "/brand/limatel-mark-light.svg" : "/brand/limatel-mark.svg"}
        alt=""
        className="h-14 w-auto sm:h-[4.25rem]"
      />
      <img
        src={light ? "/brand/limatel-wordmark-light.png" : "/brand/limatel-wordmark.png"}
        alt=""
        className="h-12 w-auto sm:h-16"
      />
    </span>
  );
}
