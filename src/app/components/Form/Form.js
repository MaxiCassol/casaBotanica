import style from "./form.module.css";
import Image from "next/image";
import frameImage from "../../../public/form/Group 96.png";

export default function Form() {
  return (
    <div className={style.container}>
      <div>
        <h2 className={style.h2}>CONTACT US</h2>
        <br></br>
        <form
          id="contactForm"
          action="mailto:zirio@gmail.com"
          method="post"
          encType="text/plain"
          className={style.form}>
          <div className={style.formInputs1}>
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="First Name*"
              required
              className={style.fname}
            />
            <input
              type="text"
              id="lname"
              name="lname"
              placeholder="Last Name*"
              required
              className={style.lname}
            />
          </div>

          <div className={style.formInputs2}>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email*"
              required
              className={style.email}
            />
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone* 333-333-4444"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              
            className={style.phone}
            />
          </div>

          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            rows="4"
            required
            className={style.textarea}
          />
          <br />

          {/* {errors.fname && <span>{errors.fname}</span>} */}
          <button
            id="submit"
            type="submit"
            className={style.button}
            // onSubmit={handleSubmit()}
          >
            SUBMIT
          </button>
        </form>
      </div>
      <div className={style.imageWrapper}>
        <Image src={frameImage} alt="formImage"></Image>
      </div>
    </div>
  );
}
