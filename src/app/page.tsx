import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

import Image from "next/image";
import logoImage from "../../public/logo.png";
import styles from "./page.module.scss";
import Link from "next/link";
import LogoComponet from "@/components/logo";
export default function Home() {
  const test = false;
  return (
    <main className={styles.mainLogin}>
      <div className={styles.containerForm}>
        <form action="">
          <LogoComponet />
          <fieldset>
            <legend>Login</legend>
            <p className="text-info">Faça o login para marcar horário:</p>

            <div className={styles.containerInput}>
              <div>
                <label>
                  <span>email:</span>
                  <MdEmail />
                  <input type="email" placeholder="example@gmail.com" />
                  <span>*</span>
                </label>
                {test && <p>Campo email é obrigatório!</p>}
              </div>

              <div>
                <label>
                  <span>senha:</span>
                  <RiLockPasswordFill />
                  <input type="password" placeholder="*****" />
                  <span>*</span>
                </label>
                {test && <p>Campo senha é obrigatório!</p>}
              </div>
            </div>

            <div className={styles.containerButtons}>
              <button>Entrar</button>
              <button>Cancelar</button>
            </div>

            <div className={styles.containerSVG}>
              <Link href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 49.4 512 399.42"
                  width="1em"
                  height="1em"
                >
                  <g fill="none" fillRule="evenodd">
                    <g fillRule="nonzero">
                      <path
                        fill="#4285f4"
                        d="M34.91 448.818h81.454V251L0 163.727V413.91c0 19.287 15.622 34.91 34.91 34.91z"
                      />
                      <path
                        fill="#34a853"
                        d="M395.636 448.818h81.455c19.287 0 34.909-15.622 34.909-34.909V163.727L395.636 251z"
                      />
                      <path
                        fill="#fbbc04"
                        d="M395.636 99.727V251L512 163.727v-46.545c0-43.142-49.25-67.782-83.782-41.891z"
                      />
                    </g>
                    <path
                      fill="#ea4335"
                      d="M116.364 251V99.727L256 204.455 395.636 99.727V251L256 355.727z"
                    />
                    <path
                      fill="#c5221f"
                      fillRule="nonzero"
                      d="M0 117.182v46.545L116.364 251V99.727L83.782 75.291C49.25 49.4 0 74.04 0 117.18z"
                    />
                  </g>
                </svg>
                <span>Login com Gmail</span>
              </Link>
            </div>
          </fieldset>
        </form>
        <Link className={styles.link} href="pages/register">
          Cadastre-se aqui...
        </Link>
      </div>
    </main>
  );
}
