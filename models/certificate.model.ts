// models/certificate.model.ts
export type CertificateType = "completion" | "excellence" | "participation";

export interface Certificate {
  readonly id: string;
  studentId: string;
  courseId: string;
  type: CertificateType;
  issuedAt: string;
}