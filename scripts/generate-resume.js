const fs = require('fs');
const path = require('path');

function createPdf() {
  const content = `BT
/F1 20 Tf
50 750 Td
(S. ARUMUGAM) Tj
ET

BT
/F1 12 Tf
50 730 Td
(Full Stack Developer | Java Developer) Tj
ET

BT
/F2 9 Tf
50 715 Td
(Thoothukudi, Tamil Nadu, India | Email: arumugam.dev.official@gmail.com | Languages: English, Tamil) Tj
ET

BT
/F2 9 Tf
50 700 Td
(GitHub: github.com/arumugam-dev | LinkedIn: linkedin.com/in/s-arumugam-dev) Tj
ET

0.2 0.4 0.8 rg
50 690 512 1 re f
0 0 0 rg

BT
/F1 12 Tf
50 675 Td
(PROFESSIONAL SUMMARY) Tj
ET

BT
/F2 9 Tf
50 660 Td
(Passionate Computer Science Engineering graduate with practical experience in full-stack web development.) Tj
50 648 Td
(Hands-on expertise in Java, Spring Boot, Hibernate, React, Next.js, Node.js, TypeScript, SQL and modern web) Tj
50 636 Td
(technologies. Adept at building scalable web applications, REST APIs, database models, and SaaS integrations.) Tj
ET

0.2 0.4 0.8 rg
50 622 512 1 re f
0 0 0 rg

BT
/F1 12 Tf
50 607 Td
(EDUCATION) Tj
ET

BT
/F1 10 Tf
50 592 Td
(Bachelor of Engineering in Computer Science and Engineering) Tj
ET

BT
/F2 9 Tf
50 580 Td
(Jayaraj Annapackiam CSI College of Engineering | Thoothukudi, Tamil Nadu) Tj
50 568 Td
(Graduation: 2025 | CGPA: 7.4 / 10.0) Tj
ET

0.2 0.4 0.8 rg
50 554 512 1 re f
0 0 0 rg

BT
/F1 12 Tf
50 539 Td
(TECHNICAL SKILLS) Tj
ET

BT
/F2 9 Tf
50 524 Td
(- Frontend: HTML, CSS, JavaScript, TypeScript, React, Next.js, Angular, Tailwind CSS) Tj
50 511 Td
(- Backend: Java, Spring Boot, Hibernate, Node.js, Express.js, Python, Flask) Tj
50 498 Td
(- Databases: MySQL, PostgreSQL, MongoDB, Redis) Tj
50 485 Td
(- Tools & Workflows: Git, GitHub, Maven, Postman, IntelliJ IDEA, Eclipse, MySQL Workbench) Tj
ET

0.2 0.4 0.8 rg
50 471 512 1 re f
0 0 0 rg

BT
/F1 12 Tf
50 456 Td
(PROJECTS & PRACTICAL DEVELOPMENT EXPERIENCE) Tj
ET

BT
/F1 10 Tf
50 441 Td
(1. ShippingAI - Shipping Automation SaaS Platform) Tj
ET

BT
/F2 9 Tf
50 429 Td
(Stack: Next.js, React, TypeScript, Node.js, Express.js, PostgreSQL, Redis) Tj
50 417 Td
(- Engineered e-commerce shipping automation SaaS simplifying order dispatching and logistics management.) Tj
50 405 Td
(- Integrated multi-courier APIs, shipment tracking webhooks, NDR management, and COD reconciliation.) Tj
50 393 Td
(- Developed scalable PostgreSQL relational schemas and cached high-frequency queries in Redis.) Tj
ET

BT
/F1 10 Tf
50 375 Td
(2. E-commerce Shipping Management System) Tj
ET

BT
/F2 9 Tf
50 363 Td
(Stack: JavaScript, Node.js, PostgreSQL, REST APIs, Express.js) Tj
50 351 Td
(- Built backend service for carrier bookings, automated shipping label generation, and tracking sync.) Tj
50 339 Td
(- Developed secure RESTful endpoints ensuring ACID compliance and transaction reliability.) Tj
ET

BT
/F1 10 Tf
50 321 Td
(3. Java Spring Boot Enterprise REST Service) Tj
ET

BT
/F2 9 Tf
50 309 Td
(Stack: Java, Spring Boot, Hibernate ORM, MySQL, Maven, Postman) Tj
50 297 Td
(- Architected enterprise backend microservice with JWT authentication and Role-Based Access Control.) Tj
50 285 Td
(- Implemented JPA entity relationships, automated schema migration, and centralized exception handling.) Tj
ET

0.2 0.4 0.8 rg
50 268 512 1 re f
0 0 0 rg

BT
/F1 12 Tf
50 253 Td
(KEY ATTRIBUTES) Tj
ET

BT
/F2 9 Tf
50 238 Td
(- Fast learner eager to contribute to collaborative engineering teams and international projects.) Tj
50 226 Td
(- Strong foundation in Object-Oriented Programming, Data Structures, Algorithms, and DBMS.) Tj
50 214 Td
(- Continuous learner proactive in adopting modern cloud and full-stack software practices.) Tj
ET
`;

  const streamLength = Buffer.byteLength(content);

  const objects = [
    `1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n`,
    `2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n`,
    `3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>\nendobj\n`,
    `4 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj\n`,
    `5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n`,
    `6 0 obj\n<< /Length ${streamLength} >>\nstream\n${content}\nendstream\nendobj\n`
  ];

  let header = "%PDF-1.4\n";
  let body = "";
  let xref = "xref\n0 7\n0000000000 65535 f \n";
  let offset = header.length;
  let offsets = [];

  for (let i = 0; i < objects.length; i++) {
    offsets.push(offset);
    body += objects[i];
    offset = header.length + body.length;
  }

  for (let i = 0; i < offsets.length; i++) {
    xref += String(offsets[i]).padStart(10, "0") + " 00000 n \n";
  }

  let trailer = `trailer\n<< /Size 7 /Root 1 0 R >>\nstartxref\n${offset}\n%%EOF\n`;
  const pdfData = header + body + xref + trailer;

  const dest = path.join(__dirname, '..', 'public', 'resume.pdf');
  fs.writeFileSync(dest, pdfData);
  console.log('Resume successfully generated at:', dest);
}

createPdf();
