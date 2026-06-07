// models/certificate.model.ts
export type CertificateType = "completion" | "excellence" | "participation";

export interface Certificate {
  readonly id: string;
  studentId: string;
  courseId: string;
  type: CertificateType;
  issuedAt: string;
}
export function generateCertificate(studentId: string, courseId: string, type: CertificateType): Certificate { return { id: `CERT-${Date.now()}`, studentId, courseId, type, issuedAt: new Date().toISOString() }; }

// TODO: remove - debug log
// console.log('debug certificate generation')

// fix: remove debug log and clean up
