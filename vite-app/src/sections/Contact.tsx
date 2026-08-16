import React, { useState } from 'react';
import styled from 'styled-components';
import { colors, shadows, transitions } from '../theme/variables';
import { Container, Section, SectionTitle, Button } from '../components/CommonStyles';

const ContactWrapper = styled(Section)`
  background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary});
  color: white;
`;

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactInfo = styled.div`
  animation: fadeInLeft 0.8s ease-out;

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
    margin-bottom: 2rem;
    line-height: 1.8;
    opacity: 0.95;
  }
`;

const ContactMethods = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ContactMethod = styled.a`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  color: white;
  text-decoration: none;
  transition: ${transitions.default};
  padding: 1rem;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateX(10px);
  }

  .icon {
    font-size: 1.8rem;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
  }

  .info {
    flex: 1;

    .label {
      font-size: 0.9rem;
      opacity: 0.85;
      margin-bottom: 0.25rem;
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
  border-radius: 12px;
  padding: 2.5rem;
  box-shadow: ${shadows.lg};

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
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  color: ${colors.textDark};
  font-weight: 600;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${colors.borderColor};
  border-radius: 8px;
  font-size: 1rem;
  font-family: inherit;
  transition: ${transitions.default};

  &:focus {
    outline: none;
    border-color: ${colors.primary};
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${colors.borderColor};
  border-radius: 8px;
  font-size: 1rem;
  font-family: inherit;
  resize: vertical;
  min-height: 150px;
  transition: ${transitions.default};

  &:focus {
    outline: none;
    border-color: ${colors.primary};
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`;

const SubmitButton = styled(Button)`
  width: 100%;
  margin-top: 1rem;
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
        <SectionTitle style={{ color: 'white', marginBottom: '3rem' }}>Get In Touch</SectionTitle>
        <ContactContent>
          <ContactInfo>
            <h2>Let's Connect</h2>
            <p>
              I'm always interested in hearing about new opportunities and projects. Feel free to reach out!
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
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">Email</Label>
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
                placeholder="Your message..."
              />
            </FormGroup>
            <SubmitButton variant="primary" type="submit">
              {submitted ? 'Message Sent! ✓' : 'Send Message'}
            </SubmitButton>
          </ContactForm>
        </ContactContent>
      </Container>
    </ContactWrapper>
  );
};
