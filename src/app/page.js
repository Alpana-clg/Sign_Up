
'use client'
import Background_sign from "@/components/Background_sign";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from './page.module.css';
//import LogInForm from "@/components/LogInForm";
import SignUpForm from "@/components/SignUpForm";

export default function Home() {
    const route =useRouter();
  const navigate =(name)=>{
    route.push(name);
  }
  return (
<main>
  <Background_sign className={styles.background} ></Background_sign>
  {/* main text */}
  {/*<LogInForm />*/}
  <SignUpForm />
</main> 
  );
}

