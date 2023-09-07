import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [role, setRole] = useState("Cat");
  const [employees, setEmployees] = useState([
    {
      name: "Zafer",
      role: "Intern",
      img: "https://media.licdn.com/dms/image/C4D03AQGQDw9lV4skJA/profile-displayphoto-shrink_200_200/0/1654272320346?e=1698883200&v=beta&t=W_DjihvotbHdLyQ0W1sAvJu3djgTaA2a4AuF_HpOYN8",
    },
    {
      name: "Elif",
      role: "Stj. Dr.",
      img: "https://media.licdn.com/dms/image/C5603AQHQ1TEY6rEfbg/profile-displayphoto-shrink_100_100/0/1614705234046?e=1698883200&v=beta&t=W2gFkoJoNRqF6SBZmZWOeBDEj-ZQ27309IsFLB-5duI",
    },
    {
      name: "Fakir",
      role: "Protecc Team Leader",
      img: "https://lh3.googleusercontent.com/pw/AIL4fc8SoSqA72xyvcpZg5nrr3d386AfVq2-ITlKPuAW0s1EK7ENsqjxthoqewBJENxeCjBkoO4yIm9vKo04PScq3NuEcmGoUmD0sOXC_siH7T2V3HdgJq_yBrtE0-O2FrpxchRACnMbCxc1-Q49oRACYTk6XvEfHBmdyh3vBxa8Y2sy5hE6um0a1TI9DuxPYY2Rn-QWDo4PbWV5WOqiiCRuUfjb3TlRsTrGjcCcTUuRlQXCKiopQlhAUA-Zkd_53bY6LyjPvb1P84yU0qEPIfGezYQsvDjpHNQ4fToRfixQ6FWu43PoORkgZJgaiGb6uBm_cGGC4wvVVej0qNX866CKjXfr9umk5yo4Tp57az2ZbL98H-uhFksYQyROvLLzeLUFkzzuM8KfZmiCIk8SU2tvIqPYqPR2SFae84rB3a_I0qGdOAM4n0G0iB5u9EoWAJSYMZPPF7Gskc2XSZatEPipFw59MpyeMfkRj4nKnl7A3kScInfw9ElS5uZZxPi0XHKzK1pflgpImpVzhvscg4kVP9DBMXNK71-B6wIbNpYmg3bYvvW0cT5li-RJsj5lxbVnfYrkQnSD2cFUDsfWT-coQoxuPbI-0sgKr6sOy_YE-vCIb9Vo_g_W_eQmIKjMktZMTtxRxe4ICsITN2gB6KRD6k5vyxbyYtdEFIUnOtBu6QwwPGkfzOquHAQjokHBh56IkaAkh9kLKgCmvlayTxuTgHH-q0TD51zTj1rhuVS9c3MWdrPR3cXn7ila3cAdvbRkhrRP79vS5ilUt23C_g_vzEhT3r4F7-xfz0n6gWuPNYVrAksmgW1eYi9xxJ2bnFBY7Y3kUDVJZ5HNv1lkS6gCBONR8psqOlIfBwp72GO3K-nry19kICRzkesexAL0TgLedI2UsYExMMSuZekBVd8hUbdc0tdlT1Gh24fDzGgqZyepkyloDJ-MgW0qOj0XdthIGaV7VJ1l9P8UH6O3qUixG6cI7DQjkDi8cy9Auay43pWfDkc_k6UHcveO_w9c8WC46ol3DA=s250-k-rw-no",
    },
    {
      name: "Luna",
      role: "Attacc Team Leader",
      img: "https://lh3.googleusercontent.com/pw/AIL4fc-9lnqxPcH1ij1yOU7TNWMZQ028z0YLvDvcwiUG75nJuGZkk4DsSlnx-YwO2WG5pyIjAuMZE2y0kVNbmWaj8f-iGlaW4u176Y5jREmk9_WT5SHY61tyl8WnIZFkBeqbynT4VsGUiMHlj0gzTFrIAYo5ydQ-JsV1YtixZ1tErllrHrLZH-CzvinvQAPVoQIGfrqPmRZmDmx1fPqo0iHO-6HGqdsXfYDf-yZf1jAh424Ftoaar7g3Obluaytc_3-ML4N7dMEHp-Xh0gxGq4wKCpnTylA2n7oHnzGX3oUf576AQruPQr1Z4JGFEoSu-ZavaN9vSQzl6U-o5-sLRci6VAF-Q7kUgc1F7unGl6P06yRW4rqCDBc4UnVbjBqoEKjT6aboEKcH2Ezt0VcTicbGlDL78useg5uqiJVFbDZuKnp1B3DTD1-koxuaUSIOJpV3fDq9Wuh4SwNXWZrAAojRiSfv499MPInvWMzJ213SIrH8BoqdD80es78jzmRuHCEaR2904R0FVdnJDTicLPQXGF3BvRiTWkiHt87tP8PForsfbntCc9ASL5YRZsCE8NI7D1C395XH2wvZiXsGWSIRZMjwPb_LXEgZygJ793HVnNAOCkbTIEAqEVy3zjfWDAOlG1dB4xKjLzqdgmbKsav_ykxF7ACuA41K-LItZYPa609SG35IXIImtQx8xh_uVf6JEF6hFv_eEJe-fEWrMwYSnnNyvWAk0W3uZAfV32dShwgyR0s0Y7qmsh3-6c1uckfIklsV-R_BPHZIEtFd3n9-VEmz65CkZCt-wh4qHr1BDda-WPZJY3P8YhMODUxyibNHUNFwvmTBP6sxPn5I38oJTS_FENeO85zPeixkg6kT5uOTvmwFXZ-aqqkuVQv3lsr72IzGVXkpM6bRtSbFKOQrW-0aTAWNxHKAHSQtc5b5XRc0b4PR6FLDGmfcjsGWTA4k77vkfU7YqJoadSMRiv-QHXomvbzmw55P8zTEI0qlrSyAEBH5NBvbvMkgNv1zqG5tLSPfSA=w598-h797-s-no?authuser=0",
    },
    {
      name: "Hardal",
      role: "Food and Sleep Specialist",
      img: "https://lh3.googleusercontent.com/pw/AIL4fc-_-uABGGkK7F2HjycddFeO0OduBdK0ulqZC5FvNKXQR0mEU4WyWHvVDZalPdMDrzCIwjt42kikCxE1M_aS9rTO0K1mQJnTqeAheIhdwwnPfBw6gTb_H7hnCSrvSksnvNo7FTBuhJKrQFQJ6rxOcfbY-GS4eOB3Zf88guxomVaexVjghZPNtT8gCbNRXzFxe1FfJYrDVBUFLc-HUOjC4nzWu9GBtGbt6tU065iC_xKQ2Ch4h79lIYySdn6ApGSZ9E2pVBHV1kn_jGygBR_sp2Lbqje-bRUbhq_O_NvpCHPMOadSYgdy-9P5wTb8_YXB1cU0I0sCQi_bIcPEipiUSLVrtm8RtchdwAR4xYbf9hzXQsS5-5vO127qXUumoicjsn0L42Iq16sE2mdiL-4oQsQH7SyBpTYUu238XXSlpH9tiKkglzEAbDWslKZ5EwExPTLXIopx9e8qgxaIuJ6Y33pCdqgFAc4l5s_-6ksxtGDBAmeOkWD5fFtEIg8csEu7zzHBUlwBk5L1l1tyfZy6DG-JDPzKYZ1q6DDKlPAb9xaONzqze8XzOti9Nl_ZWQ_N4Hx0W5P1Xkok_ru77rGIUFtquM-mP-QYsGoXMw1N3UN7Ao-jhVV_UxtxC20bQT1PoHStky3oK8Pm9i7GXSCr2Ih2GC_JOSMsNioRqourgQyTmJDeaFexruFju2y4qiMyIlz49WDRkJy1_E7uZrSVOlhRei5EijVCxH1fAm0SeqbWIT_vZ5ncweXRexLEH2gd61c6Jf1bo2-zg3JzDzeZQVgE0gZ29tpPrfglJmepVAC1KU_JpDYryByvBFqWlevuXQIcwrfyN1HW7OGoDo9RkUOeJPOAC2hw7AOUB24Ij_kI_ap9yGbfglHkpkESX7GWhVhtEUA8xYq78v4bszeltIXWpZC4-T5F1r_Bi5cRjt-9k6EvrFN7UOFpClM7Xk4CD7NR2btSuf9xiVyyCc8B9GOhqaQ0ovy3bX0gSibdQHa0NIYrTAZitFIQnbX-EVWgjVo_qA=s250-k-rw-no",
    },
    {
      name: "Kuzey",
      role: "Sleep Sleep Team Senior",
      img: "https://lh3.googleusercontent.com/pw/AIL4fc_AMsi_U0b2qM1DHBkxpWWapKlh-fa2I1sP7yf8Q0SdVVj2MGEjLJid2eq99aIePS94wivqR7JojDEHvZOGbFldVL0RwIJ7ugWzg7aesVUT9Ht8xdpDTVolQKLaR34IGWiGIsss44mAlAcjkESb6Ob6x60mN6W354jjHBPr82W0LQ0nLOzLYvBnNGP7fd_yDc2sOk7_u6h4qgWTbgDemLkLoRk-euE6L5ILJDgokwwHi8F6Yb2-M9MmnhUiPigvjMSfzI9Ug8FjLR4_sNYmxG9bY-N61gKjklppp9D6sRpX8VO1W5ZMnN_i8fDkJKy0XSXO078PpTdNBbblS7EF3dX0ss4wmP5clh8px12-exs2DWdic-HhNJ3GCCj8D28VdLgEMI92m3iA7NjjZ4mBnzJSiVA4qWEHmhfmseO4023U4wGcCmIG-T3ToJc2d4O8p_r5PmHFa6BSCqHKOYrAm4isCHSTC6ZeTkd43Oj4GBVIXZGBK6AWD_VuyxDccf2R8uRWDzOlC3dar8lKbwR1AoGr3jQ2NRzSwiVg4qMSn27lOCJbPnfwYPSKCIQFYVCBmAaeGj7Ab8-rsfWezfZhMxeKr9ZURAs_bsfGBuB6vLuEeF2uuWhuaifVPn-wdjbQD53fFdwlckRDNJ81gfyk-4_xqCQ_WQh-eVCDgyBKAfXPl5EPfyfA08oKUqlLO_d9LJTecvzTeY1403n61F3tsFOAFZdAXF1UxSlCaLazTIq_VbU7lWsDTz5z9vgZC8_7tihO-RwYLRP6_o8ai2CM2VD36fp6xz0E4Qf_pKYi-_aLGp5mfAHYwV9PWDffDiQUiAMZ8RoaHcM9ZYYWgG9bBThDQwDTEHjTneLmsXTESg1J6I-EAJTr9D0txr7konEnth73cmz146c-w1KZcK5ZatUxQb-FMDtD5sHx1vLdF9niSZvyPOlm2HdOrwXeA-dtAnYpHFpC11a9ARzXL33QJjVyBn8qmmKugYUebjNGpQh0F7XMAoeJ-0lhkJuwHWcD6iyaoA=w598-h797-s-no?authuser=0",
    },
    {
      name: "Şef",
      role: "Food Team Chef",
      img: "https://lh3.googleusercontent.com/pw/AIL4fc_3UpQ2Yd3N8x-ovTd7_EeQdCEHBpciwWV_wm9uM89ChL9lIfWw0CIgu8UKc6UDJhW0bvCU0RqrtaVUMUhzs-PfLT4FheruwATDkQhmb4Ih0aZfE1yUindeo0HHlGA2Lp2Jvf94iTxJhRusUISQDUCGaXjerVVeAytW_i3l8qf7_SWVpYEcCvWuX7_AwglG1NPXlUo4CiTGczcZLW1WnrmGkQ5_4vDL50Wv_bz87rCncpNhvybsGo9xD5dnXg7fKTZb7NlfCPNKtGQYsaI2JMk4S_X7e_JTKjxgN8WSUT15gcS4HVtLQD1hO7MlgwLuxpwIGqQtT5hRoJw_g-1_dg7RddIkQFFfy84im6Gb-Q0dDApiZLnbWxaf0HczEWYi_y-9vv9dT5V28aQq_JRPW8CnZw-51PZO6_ggcpgLKZ63h4UVY1TIOp-foIdwV3Zmh0qJ04x8e0IMb21ZD3nZdncrLoPlQNuPviup1w0Cfkj7gl2L6IWFVWtOdOGwByjNy0nuEsDka9YvaH8wopQImvzRtr65ROj_fG5xVwiWoPksa5SmmxrJRuRNwLAZ0IsKbS5GozynTDnYjd11y4b6NjpiWfA765n7-FroMQUFcs58Hoo7uDIF66BFH-72Wf8i9FTnPamzzy3Vt2SC80mbIK1dVkV-VTIvedqB3PnPBmI3YaKfxIumWSA58mA1uXkFAtVfpdrhB_YyDBK6sQHDlpjJYQSeNgedIbsUBEY5XZ6RR0tMIKN0XNVqiq8ggoom8YG9UpaXOp7NoTcomNqvktFxuQUqk4MgOr5zZeW09vS2QzODNca4TYiwWL0DXxroMH-pw4r2BryLOnKx-CntVlzyVCnSIkWcnHxydMUD6Qd7wW9EShCVxTp6HlXVFaSjkLgmzH-6TQeOAmvrQKBUInpG43hSazkx9oAWTCv9zT-edH-kzqqB5pQr1Q_YGW5vXVvVX5zuvJjDRiPysEpMbDUKK7FjkvpbwgBJRQy-jdrcNYUUpAx5pUiCi6hWZ0WiQrlB6g=w598-h703-s-no?authuser=0",
    },
    {
      name: "Zezé",
      role: "Independent Soul",
      img: "https://lh3.googleusercontent.com/pw/AIL4fc_-N8m8HeCHAOLdSwzoJ3xHpsCqrQnJvmuLTS5Hshdwj3gVCrmYP0s6G8ZoPQuhh04sVUHuNZOm7J0Qz2_i8qBhGJQ0g3o-E8dmwaC3DCuIJoUPansFcsxqEJYubIO9RQ8DBfa7246tWqlEGMGhbac77Rsa9O8SSAp8v9i24FZ5k2tR8oE-M5Klvdo9_S76iQRMgcD75_ymbWHv0WaMaDi5ptaYg8ZO5YKfmxsNSuH6064L_7GosERkWZG4NBKKI9f8j5EVj_wy35ndZdmNDPPb0i30XbqofHICXmgqBtV2ZVpG_wzcLUsUyh1JrX2UQnVyP9_9NYjc8o23on9Rb_9OiFeX0kOaRJbhmjveiFpkY3L2n1D5rrUBsSsANmBddnoGgC-z939E5FIZmCDg3eRVdmhE0WSH3AwMYcy1V_HpsErgTRWKzUN3onGk-n1H0icTsAGP5xtlz3pGjS2Y5o_Y-RsL-kNCXvx-k2irrPmj783bGJGe4-81bDYwW6yBcavZ_zzCZB7XxHL3DbDf46i9ruWUlWHtCK08wf_BsqpQXcc49_AvFMFjThuNcKN8SMemqAuPMPQZm_5zMk-g0etV1SPvrz9K4rXv1Vs9eXivFz4hPhB5vSqK8tDbcjtkCPCHKAj0MbQY5qQF121RIhPEML1PPydtbl4pH54o5sSPrv3_-ppQ0GEuJ8kRyR8ggenxzl5YooekAoGEr6f3TFg1D7bkSZWYdPXNaTGh9tVqvvrgkhhhXfy4o7ZRA6lTxYcYYZNdLR4gQSPtEUAP6QoNOe5BrugFVZwQIjv7m438Ex0ug1BgLOeQGYi81SztIWOe0bRMx09a9V49B2lwwDywmj_cA27pkqyFb66N-5IfkNh9apqYrLZPoDtZeX7Y1QFi0okRsQyeft31WNQh0mWOJyg6QjZbt1_T3M_NomocDWIbwE0JDA-aUrJGNMpm3_gWqOiat5zXGEM5IM1IT6xUW9NJUsibB2bL3WamSTcGzCGOTv3dgBnHdlRjkCJ1p_fDvg=w598-h587-s-no?authuser=0",
    },
  ]);
  const showEmployees = true;
  return (
    <div className="App">
      {" "}
      {showEmployees ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              setRole(e.target.value);
            }}
          />{" "}
          <div className="flex flex-wrap justify-center">
            {" "}
            {employees.map((employee) => {
              console.log(employee);
              return (
                <Employee
                  key={uuidv4()}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                />
              );
            })}{" "}
          </div>{" "}
        </>
      ) : (
        <p> You cannot see the employees </p>
      )}{" "}
    </div>
  );
}

export default App;
