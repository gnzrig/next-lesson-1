import * as React from "react";
import { FormLabel, Input, Checkbox, Button } from "@mui/joy";
import Link from "next/link";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import styles from "../../styles/Home.module.css";

const signup = () => {
  return (
    <div className={styles.formContainer}>
      <div className={styles.formMain}>
        <div>
          <h2>회원가입</h2>
        </div>
        <div className={styles.formInputsSignUp}>
          <div className={styles.spaceBetweenJustify}>
            <div style={{ width: "65%" }}>
              <FormLabel>아이디</FormLabel>
              <Input placeholder="Placeholder" />
            </div>
            <div style={{ width: "30%" }}>
              <FormLabel>&nbsp;</FormLabel>
              <Button style={{ width: "100%", color: "black" }} variant="soft">
                중복확인
              </Button>
            </div>
          </div>
          <div className={styles.spaceBetweenJustify}>
            <div>
              <FormLabel>비밀번호</FormLabel>
              <Input placeholder="Placeholder" />
            </div>
            <div>
              <FormLabel>비밀번호 확인</FormLabel>
              <Input placeholder="Placeholder" />
            </div>
          </div>
          <div>
            <FormLabel>이름</FormLabel>
            <Input placeholder="Placeholder" />
          </div>
          <div>
            <FormLabel>연락처</FormLabel>
            <Input placeholder="Placeholder" />
          </div>
          <div>
            <FormLabel>이메일</FormLabel>
            <Input placeholder="Placeholder" />
          </div>
          <div className={styles.spaceBetweenJustify}>
            <Checkbox
              label="개인정보 수집
및 이용 동의"
            />
            <Link href="./signup">
              {" "}
              <OpenInNewIcon />
            </Link>
          </div>
          <Button variant="soft">가입하기</Button>
        </div>
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

export default signup;
