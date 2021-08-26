import React, { useState, useRef } from "react";
import emailjs from 'emailjs-com';
import * as S from './Form.styles';
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from 'react-router-dom'

const Form = () => {

  const recaptchaRef = useRef();

  const siteKey = process.env.REACT_APP_NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  const secretKey = process.env.REACT_APP_RECAPTCHA_SECRET_KEY;

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [isEmailAllowed, setIsEmailAllowed] = useState(true)
  const [isNameAllowed, setIsNameAllowed] = useState(true)
  const [popupMessage, setPopupMessage] = useState({ message: '...', color: '#fff', opacity: 0 })
  const [isFail, setIsFail] = useState(false)



  const isEmail = () => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return email.match(regex)
  }

  const isName = () => name.length <= 30


  const popup = (msg, type) => {
    if (type === 'error') {
      setPopupMessage({ message: msg, color: '#ff4d4d', opacity: 1 })
      setIsFail(true)
      setTimeout(() => setPopupMessage({ message: msg, color: '#ff4d4d', opacity: 0 }), 5000)
    } else if (type === 'issue') {
      setPopupMessage({ message: msg, color: '#ff4d4d', opacity: 1 })
      setTimeout(() => setPopupMessage({ message: msg, color: '#ff4d4d', opacity: 0 }), 5000)
    } else if (type === 'success') {
      setPopupMessage({ message: msg, color: '#00c1ec', opacity: 1 })
      setIsFail(false)
      setTimeout(() => setPopupMessage({ message: msg, color: '#00c1ec', opacity: 0 }), 5000)
    }
  }


  const handleSubmit = async () => {

    const token = await recaptchaRef.current.executeAsync();
    recaptchaRef.current.reset();

    if (!isEmail()) {
      setIsEmailAllowed(false)
      setTimeout(() => setIsEmailAllowed(true), 5000)
    }
    if (!isName()) {
      setIsNameAllowed(false)
      setTimeout(() => setIsNameAllowed(true), 5000)
    }
    if (isEmail() && isName() && message && token) {
      emailjs.send(
        'service_f2pkwg4',
        'template_t19rj59',
        { name: name, company: company, phone: phone, email: email, message: message },
        'user_ZnKZg2istVrG6SVgwBLan'
      )
        .then((result) => {
          // console.log(result.text);
          popup('Message envoyé ! Je vous recontacterai dès que possible.', 'success')
          setName("");
          setCompany("");
          setPhone("");
          setEmail("");
          setMessage("");
        })
        .catch((error) => {
          // console.log(error.text)
          popup("Une erreur s'est produite, veuillez réessayer", 'issue')
        })

    } else {
      popup('Merci de remplir correctement les champs requis *', 'error')
    }

  };


  return (
    <>
      <S.Form>
        <S.SubTitle>Vous avez une question ou une proposition ? &Eacute;crivez moi !</S.SubTitle>
        <S.NameContent>
          <S.NameLabel
            isNameAllowed={isNameAllowed}
          >
            Pas plus de 30 caratères s'il vous plaît !
          </S.NameLabel>
          <S.InputRequired
            type="text"
            id="name"
            name="name"
            onChange={(e) => setName(e.target.value)}
            placeholder="nom *"
            value={name}
            autoComplete="off"
            isFail={isFail}
          />
        </S.NameContent>
        <S.Input
          type="text"
          id="company"
          name="company"
          onChange={(e) => setCompany(e.target.value)}
          placeholder="société"
          value={company}
        />
        <S.Input
          type="text"
          id="phone"
          name="phone"
          onChange={(e) => setPhone(e.target.value)}
          placeholder="téléphone"
          value={phone}
        />
        <S.EmailContent>
          <S.EmailLabel
            isEmailAllowed={isEmailAllowed}
          >
            Email non valide
          </S.EmailLabel>
          <S.InputRequired
            type="mail"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email *"
            value={email}
            autoComplete="off"
            isFail={isFail}
          />
        </S.EmailContent>
        <S.Textarea
          id="message"
          name="message"
          onChange={(e) => setMessage(e.target.value)}
          placeholder="message *"
          value={message}
          isFail={isFail}
        >
        </S.Textarea>
        <S.FormMessage popupMessage={popupMessage}>{popupMessage.message}</S.FormMessage>
        <S.Button
          type="button"
          value="Envoyer"
          onClick={handleSubmit}
        />
      </S.Form>
      This site is protected by reCAPTCHA and the Google <Link to={{ pathname: "https://policies.google.com/privacy" }} target="_blank">Privacy Policy</Link> and <Link to={{ pathname: "https://policies.google.com/terms" }} target="_blank">Terms of Service</Link> apply.
      <ReCAPTCHA
        ref={recaptchaRef}
        size="invisible"
        sitekey={siteKey}
        badge="inline"
      />
    </>
  );
};

export default Form;