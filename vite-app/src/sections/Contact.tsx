import React, { useState } from 'react';
import styled from 'styled-components';
import { colors, transitions } from '../theme/variables';
import { Container, Section } from '../components/CommonStyles';

const ContactWrapper = styled(Section)`
  background: linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%);
  color: white;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -10%;
    width: 500px;
    height: 500px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -20%;
    left: -5%;
    width: 400px;
    height: 400px;
    background: rgba(255, 255, 255, 0.08);
    border-radius: 50%;
  }
`;

const ContactTitle = styled.h2`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 3rem;
  text-align: center;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactInfo = styled.div`
  animation: fadeInLeft 0.8s ease-out;
  position: relative;
  z-index: 1;

  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    font-weight: 700;
  }

  p {
    font-size: 1.1rem;
    margin-bottom: 2.5rem;
    line-height: 1.8;
    opacity: 0.95;
  }
`;

const ContactMethods = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ContactMethod = styled.a`
  display: flex;
  align-items: center;
  gap: 2rem;
  color: white;
  text-decoration: none;
  transition: ${transitions.default};
  padding: 1.5rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.2);
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateX(15px);
    border-color: rgba(255, 255, 255, 0.4);
  }

  .icon {
    font-size: 2rem;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 12px;
    flex-shrink: 0;
    transition: ${transitions.default};
  }

  &:hover .icon {
    background: rgba(255, 255, 255, 0.3);
    transform: scale(1.1);
  }

  .info {
    flex: 1;

    .label {
      font-size: 0.9rem;
      opacity: 0.85;
      margin-bottom: 0.3rem;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      font-weight: 600;
    }

    .value {
      font-weight: 600;
      font-size: 1rem;
    }
  }
`;

const ContactForm = styled.form`
  animation: fadeInRight 0.8s ease-out;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 1;

  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.8rem;
`;

const Label = styled.label`
  display: block;
  color: ${colors.textDark};
  font-weight: 700;
  margin-bottom: 0.7rem;
  font-size: 0.95rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border: 2px solid ${colors.borderColor};
  border-radius: 12px;
  font-size: 1rem;
  font-family: inherit;
  transition: ${transitions.default};
  background: white;

  &:focus {
    outline: none;
    border-color: ${colors.primary};
    box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.1);
    background: #fafbff;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: 2px solid ${colors.borderColor};
  border-radius: 12px;
  font-size: 1rem;
  font-family: inherit;
  resize: vertical;
  min-height: 150px;
  transition: ${transitions.default};
  background: white;

  &:focus {
    outline: none;
    border-color: ${colors.primary};
    box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.1);
    background: #fafbff;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 1.2rem;
  background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary});
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  margin-top: 1rem;
  transition: ${transitions.default};
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 30px rgba(102, 126, 234, 0.6);
  }

  &:active {
    transform: translateY(-1px);
  }
`;

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 2000);
  };

  return (
    <ContactWrapper id="contact">
      <Container>
        <ContactTitle>Let's Get In Touch</ContactTitle>
        <ContactContent>
          <ContactInfo>
            <p>
              I'm always interested in hearing about new opportunities, exciting projects, and interesting ideas. Don't hesitate to reach out if you have something to discuss!
            </p>
            <ContactMethods>
              <ContactMethod href="mailto:sanjana@email.com">
                <div className="icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="info">
                  <div className="label">Email</div>
                  <div className="value">sanjana@email.com</div>
                </div>
              </ContactMethod>
              <ContactMethod href="tel:+919876543210">
                <div className="icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="info">
                  <div className="label">Phone</div>
                  <div className="value">+91 9876543210</div>
                </div>
              </ContactMethod>
              <ContactMethod href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <div className="icon">
                  <i className="fab fa-linkedin"></i>
                </div>
                <div className="info">
                  <div className="label">LinkedIn</div>
                  <div className="value">linkedin.com/in/sanjana</div>
                </div>
              </ContactMethod>
              <ContactMethod href="https://github.com" target="_blank" rel="noopener noreferrer">
                <div className="icon">
                  <i className="fab fa-github"></i>
                </div>
                <div className="info">
                  <div className="label">GitHub</div>
                  <div className="value">github.com/sanjana</div>
                </div>
              </ContactMethod>
            </ContactMethods>
          </ContactInfo>
          <ContactForm onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="name">Full Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">Email Address</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="message">Message</Label>
              <TextArea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell me about your project or inquiry..."
              />
            </FormGroup>
            <SubmitButton type="submit">
              {submitted ? '✓ Message Sent Successfully!' : 'Send Message'}
            </SubmitButton>
          </ContactForm>
        </ContactContent>
      </Container>
    </ContactWrapper>
  );
};
