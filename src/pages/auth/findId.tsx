import React, { FormEvent } from "react";
import { FormLabel, Input, Checkbox, Button } from "@mui/joy";
import Link from "next/link";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import styles from "../../styles/Home.module.css";
import { Box, ToggleButtonGroup, ToggleButton } from "@mui/material";

const findId = () => {
  const [selected, setSelected] = React.useState(false);
  return (
    <div className={styles.formContainer}>
      <div className={styles.formMain}>
        <div>
          <h2>아이디/비밀번호 찾기</h2>
        </div>
        <form>
          <div className={styles.formInputs}>
            <div className={styles.spaceBetweenJustify}>
              <Button
                variant="soft"
                type="submit"
                style={{ width: "45%", color: "black" }}
              >
                아이디 찾기
              </Button>
              <Button
                variant="soft"
                type="submit"
                style={{
                  width: "45%",
                  color: "black",
                  backgroundColor: "white",
                }}
              >
                비밀번호 찾기
              </Button>
            </div>
            <div className={styles.reminder}>
              <span>
                <TipsAndUpdatesIcon style={{ backgroundColor: "#86969e" }} />
              </span>
              가입한 이메일로 찾으시는 계정 정보를 발송합니다.
            </div>
            <div>
              <FormLabel>이메일</FormLabel>
              <Input
                type="password"
                placeholder="Placeholder"
                name="password"
              />
            </div>
            <Button variant="soft" type="submit">
              확인
            </Button>
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

export default findId;
