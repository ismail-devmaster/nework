import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href="/receptionist/appoitments">Appoitments</Link>
      <Link href="/receptionist/doctor">doctor</Link>
      <Link href="/receptionist/lobby">lobby</Link>
      <Link href="/receptionist/patients">patients</Link>
      
    </>
  );
}
