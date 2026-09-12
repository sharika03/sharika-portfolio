import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function Stroke({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function ArrowDown(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M12 4v16" />
      <path d="m5.5 13.5 6.5 6.5 6.5-6.5" />
    </Stroke>
  );
}

export function ArrowRight(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M4 12h16" />
      <path d="m13.5 5.5 6.5 6.5-6.5 6.5" />
    </Stroke>
  );
}

export function ArrowUpRight(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M7 17 17 7" />
      <path d="M8.5 7H17v8.5" />
    </Stroke>
  );
}

export function ChevronDown(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="m6 9.5 6 6 6-6" />
    </Stroke>
  );
}

export function Mail(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M3 7.5A2.5 2.5 0 0 1 5.5 5h13A2.5 2.5 0 0 1 21 7.5v9a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 16.5z" />
      <path d="m3.6 7.1 8.4 5.9 8.4-5.9" />
    </Stroke>
  );
}

export function Phone(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M6.4 3h3l1.5 4-2 1.4a11.2 11.2 0 0 0 5 5L15.3 11l4 1.5v3a2 2 0 0 1-2.2 2A16.6 16.6 0 0 1 4.4 5.2 2 2 0 0 1 6.4 3Z" />
    </Stroke>
  );
}

export function LinkedIn(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M4.98 3.5a2.5 2.5 0 1 0 .02 5 2.5 2.5 0 0 0-.02-5ZM3.1 9.75h3.76V21H3.1zM10 9.75h3.6v1.54h.05a3.95 3.95 0 0 1 3.55-1.95c3.8 0 4.5 2.5 4.5 5.75V21h-3.75v-4.99c0-1.19-.02-2.72-1.66-2.72-1.66 0-1.91 1.3-1.91 2.64V21H10z" />
    </svg>
  );
}

export function MapPin(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M12 21s7-5.7 7-11a7 7 0 1 0-14 0c0 5.3 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </Stroke>
  );
}

export function Download(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M12 3.5v11.5" />
      <path d="m7.5 10.5 4.5 4.5 4.5-4.5" />
      <path d="M4.5 20h15" />
    </Stroke>
  );
}

export function Menu(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </Stroke>
  );
}

export function Close(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="m6 6 12 12" />
      <path d="M18 6 6 18" />
    </Stroke>
  );
}

export function Check(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </Stroke>
  );
}

export function Spinner(props: IconProps) {
  return (
    <Stroke {...props}>
      <circle cx="12" cy="12" r="9" opacity="0.25" />
      <path d="M21 12a9 9 0 0 0-9-9" />
    </Stroke>
  );
}

export function Send(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M20.5 3.5 3.5 10.2l6.3 2.5 2.5 6.3z" />
      <path d="m9.8 12.7 4.4-4.4" />
    </Stroke>
  );
}

export function Users(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M15.5 20.5V19a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4v1.5" />
      <circle cx="9.5" cy="7.5" r="3.5" />
      <path d="M17 4.3a3.5 3.5 0 0 1 0 6.4" />
      <path d="M18.6 15a4 4 0 0 1 2.9 3.84v1.66" />
    </Stroke>
  );
}

export function Nodes(props: IconProps) {
  return (
    <Stroke {...props}>
      <rect x="9" y="3" width="6" height="5" rx="1.5" />
      <rect x="2.5" y="16" width="6" height="5" rx="1.5" />
      <rect x="15.5" y="16" width="6" height="5" rx="1.5" />
      <path d="M12 8v3.5" />
      <path d="M5.5 16v-4.5h13V16" />
    </Stroke>
  );
}

export function Code(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="m8.5 8.5-4 3.5 4 3.5" />
      <path d="m15.5 8.5 4 3.5-4 3.5" />
      <path d="m13.4 5-2.8 14" />
    </Stroke>
  );
}

export function Cloud(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M7.5 19a4.5 4.5 0 0 1-.3-9A5.5 5.5 0 0 1 17.8 11h.2a4 4 0 0 1 0 8z" />
    </Stroke>
  );
}

export function Link(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M10.5 13.5a4 4 0 0 0 5.66 0l2.5-2.5a4 4 0 1 0-5.66-5.66l-1.2 1.2" />
      <path d="M13.5 10.5a4 4 0 0 0-5.66 0l-2.5 2.5a4 4 0 1 0 5.66 5.66l1.2-1.2" />
    </Stroke>
  );
}

export function Compass(props: IconProps) {
  return (
    <Stroke {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.6 8.4-2.1 5.1-5.1 2.1 2.1-5.1z" />
    </Stroke>
  );
}

export function Seal(props: IconProps) {
  return (
    <Stroke {...props}>
      <circle cx="12" cy="9" r="5.5" />
      <path d="m9.9 8.9 1.6 1.6 3-3" />
      <path d="M8 13.8 7 21.2l5-2.7 5 2.7-1-7.4" />
    </Stroke>
  );
}

export function GraduationCap(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M12 4 2.5 8.5 12 13l9.5-4.5z" />
      <path d="M6 10.8V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-5.2" />
    </Stroke>
  );
}
