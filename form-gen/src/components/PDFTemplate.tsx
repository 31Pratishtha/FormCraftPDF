import { type FormData } from '../schemas/formSchema';
import styles from './PDFTemplate.module.css';

interface PDFTemplateProps {
  data: FormData;
}

export const PDFTemplate: React.FC<PDFTemplateProps> = ({ data }) => {
  return (
    <div className={styles.template}>
      <div className={styles.header}>
        <h1 className={styles.title}>Form Submission Details</h1>
        <div className={styles.divider}></div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Basic Information</h2>
        <div className={styles.grid}>
          <div>
            <p className={styles.text}><strong>Name:</strong> {data.firstName} {data.lastName}</p>
            <p className={styles.text}><strong>Email:</strong> {data.email}</p>
          </div>
          <div>
            <p className={styles.text}><strong>Phone:</strong> {data.phone}</p>
            <p className={styles.text}><strong>Age:</strong> {data.age}</p>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Personal Details</h2>
        <div className={styles.grid}>
          <div>
            <p className={styles.text}><strong>Gender:</strong> {data.gender || 'Not specified'}</p>
            <p className={styles.text}><strong>Student Status:</strong> {data.isStudent ? 'Yes' : 'No'}</p>
          </div>
          <div>
            <p className={styles.text}><strong>Preferred Language:</strong> {data.preferredLanguage || 'Not specified'}</p>
            <p className={styles.text}><strong>Newsletter:</strong> {data.newsletterSubscription ? 'Subscribed' : 'Not Subscribed'}</p>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Additional Information</h2>
        {data.bio && (
          <div style={{ marginBottom: '15px' }}>
            <p className={styles.text}><strong>Bio:</strong></p>
            <p className={styles.bio}>{data.bio}</p>
          </div>
        )}
        {data.website && (
          <p className={styles.text}><strong>Website:</strong> {data.website}</p>
        )}
        <p className={styles.text}><strong>Rating:</strong> {data.rating}/5</p>
      </div>

      <div className={styles.footer}>
        <p>Generated on {new Date().toLocaleDateString()}</p>
      </div>
    </div>
  );
}; 