import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

async function generateResume() {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595.28, 841.89]); // A4 (595 x 842 pt)
  const { width, height } = page.getSize();

  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  let y = height - 36;
  const left = 40;
  const right = width - 40;
  const contentWidth = right - left;

  // Colors matching professional modern design
  const darkColor = rgb(0.08, 0.1, 0.14);
  const textMuted = rgb(0.32, 0.38, 0.45);
  const accentBlue = rgb(0.08, 0.38, 0.78);
  const ruleColor = rgb(0.82, 0.86, 0.90);

  function drawText(text: string, x: number, yPos: number, size: number, font: any, color: any) {
    page.drawText(text, { x, y: yPos, size, font, color });
  }

  function drawLine(yPos: number) {
    page.drawLine({
      start: { x: left, y: yPos },
      end: { x: right, y: yPos },
      thickness: 0.75,
      color: ruleColor,
    });
  }

  function drawWrappedText(text: string, x: number, yPos: number, maxWidth: number, size: number, font: any, color: any, lineSpacing: number = 10.5): number {
    const words = text.split(' ');
    let line = '';
    let currentY = yPos;
    for (const word of words) {
      const testLine = line + (line ? ' ' : '') + word;
      const testWidth = font.widthOfTextAtSize(testLine, size);
      if (testWidth > maxWidth) {
        drawText(line, x, currentY, size, font, color);
        currentY -= lineSpacing;
        line = word;
      } else {
        line = testLine;
      }
    }
    if (line) {
      drawText(line, x, currentY, size, font, color);
      currentY -= lineSpacing;
    }
    return currentY;
  }

  // HEADER (Centered Name and Title)
  const name = 'PRIYANSHU BORKAR';
  const nameWidth = fontBold.widthOfTextAtSize(name, 19);
  drawText(name, (width - nameWidth) / 2, y, 19, fontBold, darkColor);
  y -= 14;

  const subtitle = 'Data Analyst & AI Engineer';
  const subWidth = fontRegular.widthOfTextAtSize(subtitle, 11);
  drawText(subtitle, (width - subWidth) / 2, y, 11, fontBold, accentBlue);
  y -= 13;

  const contactLine = 'priyanshuborkar88@gmail.com   |   +91 8329687118   |   LinkedIn   |   GitHub   |   Nagpur, Maharashtra';
  const contactWidth = fontRegular.widthOfTextAtSize(contactLine, 8.5);
  drawText(contactLine, (width - contactWidth) / 2, y, 8.5, fontRegular, textMuted);
  y -= 14;

  // SECTION 1: Professional Summary
  drawLine(y);
  y -= 12;
  drawText('Professional Summary', left, y, 10.5, fontBold, darkColor);
  y -= 11;
  const summary = 'Aspiring Data Analyst and final-year B.Tech student in Artificial Intelligence with a robust foundation in analytics, data cleaning, and visualization. Proficient in leveraging Python, SQL, and advanced BI tools to transform complex datasets into actionable insights. Eager to apply analytical thinking and technical expertise to drive data-driven decision-making and optimize business growth in high-impact environments.';
  y = drawWrappedText(summary, left, y, contentWidth, 8.2, fontRegular, darkColor, 10.2);
  y -= 3;

  // SECTION 2: Technical Skills
  drawLine(y);
  y -= 12;
  drawText('Technical Skills', left, y, 10.5, fontBold, darkColor);
  y -= 11;

  const skillsData = [
    { cat: 'Programming & Databases:', val: 'Python (Pandas, NumPy), SQL (MySQL)' },
    { cat: 'Business Intelligence & Visualization:', val: 'Power BI, Tableau (Basic), Excel (Advanced), Google Sheets' },
    { cat: 'Analytics & AI Core:', val: 'Data Analysis, Data Cleaning, Statistics, Machine Learning, DBMS, Problem Solving' },
    { cat: 'Tools & Version Control:', val: 'Git, GitHub, Streamlit, AI Prompting' },
  ];

  for (const s of skillsData) {
    drawText(s.cat, left, y, 8.2, fontBold, darkColor);
    const catW = fontBold.widthOfTextAtSize(s.cat, 8.2);
    drawText(s.val, left + catW + 6, y, 8.2, fontRegular, darkColor);
    y -= 10.5;
  }
  y -= 3;

  // SECTION 3: Data & Engineering Projects
  drawLine(y);
  y -= 12;
  drawText('Data & Engineering Projects', left, y, 10.5, fontBold, darkColor);
  y -= 12;

  // Project 1: Smart Classroom & Timetable Scheduler
  drawText('Smart Classroom & Timetable Scheduler', left, y, 8.8, fontBold, darkColor);
  drawText('|  Python, SQL, Excel, Streamlit', left + 195, y, 8.2, fontOblique, textMuted);
  const p1Date = 'Jan 2025 – Present';
  drawText(p1Date, right - fontRegular.widthOfTextAtSize(p1Date, 8.2), y, 8.2, fontRegular, darkColor);
  y -= 10.5;
  drawText('–', left + 4, y, 8, fontRegular, accentBlue);
  y = drawWrappedText('Developing an automated scheduling system utilizing data analysis and optimization techniques to resolve classroom allocation conflicts.', left + 14, y, contentWidth - 14, 8, fontRegular, darkColor, 9.8);
  drawText('–', left + 4, y, 8, fontRegular, accentBlue);
  y = drawWrappedText('Building an interactive web interface via Streamlit, integrating SQL databases for real-time scheduling updates.', left + 14, y, contentWidth - 14, 8, fontRegular, darkColor, 9.8);
  y -= 3;

  // Project 2: Student Performance Dashboard
  drawText('Student Performance Dashboard', left, y, 8.8, fontBold, darkColor);
  drawText('|  Power BI, SQL, Excel', left + 155, y, 8.2, fontOblique, textMuted);
  const p2Date = 'Mar 2024';
  drawText(p2Date, right - fontRegular.widthOfTextAtSize(p2Date, 8.2), y, 8.2, fontRegular, darkColor);
  y -= 10.5;
  drawText('–', left + 4, y, 8, fontRegular, accentBlue);
  y = drawWrappedText('Engineered an interactive BI dashboard to analyze student performance metrics, attendance tracking, and subject trends.', left + 14, y, contentWidth - 14, 8, fontRegular, darkColor, 9.8);
  drawText('–', left + 4, y, 8, fontRegular, accentBlue);
  y = drawWrappedText('Executed robust data cleaning and transformation in Excel and wrote complex SQL queries to structure data for visualization.', left + 14, y, contentWidth - 14, 8, fontRegular, darkColor, 9.8);
  y -= 3;

  // Project 3: Sales Analysis Dashboard
  drawText('Sales Analysis Dashboard', left, y, 8.8, fontBold, darkColor);
  drawText('|  Power BI, Data Analytics', left + 130, y, 8.2, fontOblique, textMuted);
  const p3Date = 'Dec 2023';
  drawText(p3Date, right - fontRegular.widthOfTextAtSize(p3Date, 8.2), y, 8.2, fontRegular, darkColor);
  y -= 10.5;
  drawText('–', left + 4, y, 8, fontRegular, accentBlue);
  y = drawWrappedText('Analyzed raw sales datasets to identify market trends, top-performing product categories, and regional growth opportunities.', left + 14, y, contentWidth - 14, 8, fontRegular, darkColor, 9.8);
  drawText('–', left + 4, y, 8, fontRegular, accentBlue);
  y = drawWrappedText('Formulated key performance indicator (KPI) dashboards to support executive-level business decisions.', left + 14, y, contentWidth - 14, 8, fontRegular, darkColor, 9.8);
  y -= 3;

  // Project 4: Intelligent Traffic Management System
  drawText('Intelligent Traffic Management System', left, y, 8.8, fontBold, darkColor);
  drawText('|  HTML, CSS, JavaScript (Hackathon)', left + 185, y, 8.2, fontOblique, textMuted);
  const p4Date = 'Feb 2026';
  drawText(p4Date, right - fontRegular.widthOfTextAtSize(p4Date, 8.2), y, 8.2, fontRegular, darkColor);
  y -= 10.5;
  drawText('–', left + 4, y, 8, fontRegular, accentBlue);
  y = drawWrappedText('Developed the front-end architecture for a rapid-prototype traffic optimization platform during a competitive tech hackathon.', left + 14, y, contentWidth - 14, 8, fontRegular, darkColor, 9.8);
  drawText('–', left + 4, y, 8, fontRegular, accentBlue);
  y = drawWrappedText('Ensured strict performance control and responsive UI by natively building the client-side logic without reliance on heavy frameworks.', left + 14, y, contentWidth - 14, 8, fontRegular, darkColor, 9.8);
  y -= 3;

  // SECTION 4: Education
  drawLine(y);
  y -= 12;
  drawText('Education', left, y, 10.5, fontBold, darkColor);
  y -= 12;

  // College
  drawText('JD College of Engineering & Management (JDCOEM)', left, y, 8.8, fontBold, darkColor);
  const collegeLoc = 'Nagpur, India';
  drawText(collegeLoc, right - fontRegular.widthOfTextAtSize(collegeLoc, 8.2), y, 8.2, fontRegular, darkColor);
  y -= 10.5;
  drawText('Bachelor of Technology in Artificial Intelligence Engineering', left, y, 8.2, fontOblique, textMuted);
  const collegeDates = 'June 2023 – Expected June 2027';
  drawText(collegeDates, right - fontRegular.widthOfTextAtSize(collegeDates, 8.2), y, 8.2, fontOblique, textMuted);
  y -= 10;
  drawText('– CGPA: 8.72 (Current as of 7th Semester)', left + 8, y, 8.2, fontRegular, darkColor);
  y -= 12;

  // 12th & 10th
  drawText('Prerna International School   –   Higher Secondary School Certificate (12th Grade):  65% (Verified Record)', left + 8, y, 8, fontRegular, textMuted);
  y -= 10.5;
  drawText('K John Public School   –   Secondary School Certificate (10th Grade):  77% (Verified Record)', left + 8, y, 8, fontRegular, textMuted);
  y -= 13;

  // SECTION 5: Professional Experience & Leadership
  drawLine(y);
  y -= 12;
  drawText('Professional Experience & Leadership', left, y, 10.5, fontBold, darkColor);
  y -= 12;

  // CEC
  drawText('Competitive Exam Cell (CEC), JDCOEM', left, y, 8.8, fontBold, darkColor);
  drawText('Nagpur, India', right - fontRegular.widthOfTextAtSize('Nagpur, India', 8.2), y, 8.2, fontRegular, darkColor);
  y -= 10.5;
  drawText('CEO & Founder', left, y, 8.2, fontOblique, accentBlue);
  const cecDates = '2023 – Present';
  drawText(cecDates, right - fontRegular.widthOfTextAtSize(cecDates, 8.2), y, 8.2, fontOblique, textMuted);
  y -= 10;
  drawText('– Lead a team of 100+ members to orchestrate high-impact study sessions, workshops, and competitive exam readiness events.', left + 8, y, 8, fontRegular, darkColor);
  y -= 9.5;
  drawText('– Manage overarching strategic planning, content curation, and campus-wide student engagement initiatives.', left + 8, y, 8, fontRegular, darkColor);
  y -= 11.5;

  // Aavinya
  drawText('Aavinya (AI Department Forum)', left, y, 8.8, fontBold, darkColor);
  drawText('Nagpur, India', right - fontRegular.widthOfTextAtSize('Nagpur, India', 8.2), y, 8.2, fontRegular, darkColor);
  y -= 10.5;
  drawText('Magazine Committee Head', left, y, 8.2, fontOblique, textMuted);
  const aavDates = '2023 – 2024';
  drawText(aavDates, right - fontRegular.widthOfTextAtSize(aavDates, 8.2), y, 8.2, fontOblique, textMuted);
  y -= 10;
  drawText('– Organized technical and non-technical activities, fostering community development within the AI department.', left + 8, y, 8, fontRegular, darkColor);
  y -= 11.5;

  // Publicity Committee
  drawText('Publicity Committee - JDCOEM', left, y, 8.8, fontBold, darkColor);
  drawText('Nagpur, India', right - fontRegular.widthOfTextAtSize('Nagpur, India', 8.2), y, 8.2, fontRegular, darkColor);
  y -= 10.5;
  drawText('Co-Head', left, y, 8.2, fontOblique, textMuted);
  drawText(aavDates, right - fontRegular.widthOfTextAtSize(aavDates, 8.2), y, 8.2, fontOblique, textMuted);
  y -= 10;
  drawText('– Spearheaded branding strategies, social media campaigns, and promotional logistics for large-scale college fests.', left + 8, y, 8, fontRegular, darkColor);
  y -= 13;

  // SECTION 6: Certifications & Additional Information
  drawLine(y);
  y -= 12;
  drawText('Certifications & Additional Information', left, y, 10.5, fontBold, darkColor);
  y -= 11;

  const certLine = 'Certifications: Google Data Analytics Professional Certificate (Coursera - In Progress), Power BI Data Analyst (Microsoft), SQL for Data Science (Coursera), Data Analytics with Excel (Simplilearn), Python for Data Science (Udemy).';
  y = drawWrappedText(certLine, left, y, contentWidth, 8, fontRegular, darkColor, 10);
  y -= 1;

  const achLine = 'Achievements: 1st Rank in College-Level Badminton, Active Participant in Technical Hackathons.';
  drawText(achLine, left, y, 8, fontRegular, darkColor);
  y -= 10;

  const langLine = 'Languages: English, Hindi, Marathi, German (Learning).';
  drawText(langLine, left, y, 8, fontRegular, darkColor);

  const pdfBytes = await pdfDoc.save();
  const publicDir = path.resolve(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  const outputPath = path.resolve(publicDir, 'Priyanshu_Borkar_Resume.pdf');
  fs.writeFileSync(outputPath, pdfBytes);
  console.log(`Resume successfully generated at: ${outputPath} (${pdfBytes.length} bytes)`);
}

generateResume().catch(err => {
  console.error(err);
  process.exit(1);
});
