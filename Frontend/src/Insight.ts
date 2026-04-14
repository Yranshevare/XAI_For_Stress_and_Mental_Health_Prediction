"use server";
import { SystemMessage, HumanMessage } from "langchain";
import llm from "./agent";

const systemPromptTemplate = `
You are an expert data analyst and domain specialist. Your task is to generate clear, actionable, and non-obvious insights from the provided data.

Strict rules:
- Do NOT describe the data superficially.
- Do NOT repeat obvious trends.
- Focus only on meaningful, decision-useful insights.
- Every insight must be supported by reasoning based on the data.
- Avoid vague words like "may", "could", "possibly" unless uncertainty is explicitly required.
- Do NOT hallucinate facts outside the given data.

Output format:
1. Key Insights (5–10 points)
   - Each insight must:
     • Be concise (2–3 lines)
     • Include reasoning (why this insight matters)
     • Mention specific variables/features if relevant

2. Patterns & Relationships
   - Identify correlations, dependencies, or interactions between variables

3. Anomalies / Outliers
   - Highlight anything unusual or unexpected
   - Explain why it stands out

4. Risk Indicators (if applicable)
   - Identify signals that may indicate negative outcomes or failure cases

5. Actionable Recommendations
   - Concrete steps based on insights
   - No generic advice

Tone:
- Analytical, direct, and objective
- No storytelling, no fluff
- Prioritize clarity over length
`;

export default async function Insight(data : any) {
    const systemMessage = new SystemMessage(systemPromptTemplate);
    const humanMessage = new HumanMessage(`
        Context:
- Problem: Stress prediction using physiological + behavioral data
- Features: heart rate, sleep hours, activity level, screen time, etc.
- Model output: Stress level (Low, Medium, High)

Data:
${JSON.stringify(data)}

Generate insights.
        `);
    const response = await llm.invoke([systemMessage, humanMessage]);

    const insights = typeof response.content === "string" ? response.content : JSON.stringify(response.content);

    return insights;
}
