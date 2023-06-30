import React, { FormEvent } from "react";
import { FormLabel, Input, Checkbox, Button } from "@mui/joy";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

const login = () => {
  const formSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <div className={styles.formContainer}>
      <div className={styles.formMain}>
        <div>
          <h2>
            마추 잉글리시에 오신것을
            <span style={{ display: "block" }}>환영합니다!</span>
          </h2>
        </div>
        <div>
          <p>
            회원가입 후, <span style={{ fontWeight: "bolder" }}>승인</span> 되면
            로그인 하실 수 있습니다.
          </p>
        </div>
        <form onSubmit={(e) => formSubmit(e)}>
          <div className={styles.formInputs}>
            <div>
              <FormLabel>아이디</FormLabel>
              <Input placeholder="Placeholder" name="username" />
            </div>
            <div>
              <FormLabel>비밀번호</FormLabel>
              <Input
                type="password"
                placeholder="Placeholder"
                name="password"
              />
            </div>
            <div className={styles.spaceBetweenJustify}>
              <Checkbox label="아이디 저장" />
              <Link href="./signup">아이디·비밀번호찾기</Link>
            </div>
            <Button variant="soft" type="submit">
              로그인
            </Button>
            <div className={styles.spaceBetweenAlign}>
              <p>아직 계정이 없으신가요?</p>
              <span>
                <Link href="./signup">회원가입</Link>
              </span>
            </div>
          </div>
        </form>
      </div>
      <div className={styles.bgImage}>
        <img
          src="https://images.pexels.com/photos/17131205/pexels-photo-17131205/free-photo-of-food-wood-restaurant-dawn.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Background image"
        />
      </div>
    </div>
  );
};

export default login;
