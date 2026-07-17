import { sitePath } from "./site.js";

export const standaloneNotes = [
  ["2026 Agent 技术全景", "agent/agent-landscape-2026/"],
  ["AI 概念坐标系", "agent/ai-concept-coordinate-system/"],
  ["Agent 是什么", "agent/what-is-agent/"],
];

export const noteSections = [
  {
    id: "agent-patterns",
    title: "Agent 范式",
    items: [
      ["Agent 范式总览", "agent/design-patterns/"],
      ["ReAct", "agent/react/"],
      ["Plan-and-Execute", "agent/plan-and-execute/"],
      ["Reflection", "agent/reflection/"],
      ["Workflow", "agent/workflow/"],
    ],
  },
  {
    id: "agent-engineering",
    title: "Agent 工程",
    items: [
      ["Prompt Engineering", "agent/prompt-engineering/"],
      ["Context Engineering", "agent/context-engineering/"],
      ["Harness Engineering", "agent/agent-harness/"],
      ["Tool Use", "agent/tool-use/"],
      ["Function Calling", "agent/function-calling/"],
      ["MCP", "agent/mcp/"],
    ],
  },
  {
    id: "langgraph",
    title: "LangGraph",
    items: [
      ["StateGraph", "langgraph/stategraph/"],
      ["Node 与 Edge", "langgraph/node-edge/"],
      ["Conditional Edge", "langgraph/conditional-edge/"],
      ["Checkpoint", "langgraph/checkpoint/"],
      ["Multi-Agent", "langgraph/multi-agent/"],
      ["Retry 与降级", "langgraph/retry-fallback/"],
    ],
  },
  {
    id: "rag",
    title: "RAG",
    items: [
      ["RAG 是什么", "rag/what-is-rag/"],
      ["RAG 核心流程", "rag/pipeline/"],
      ["文档处理与 Chunking", "rag/document-processing/"],
      ["Embedding 与向量数据库", "rag/embedding-vector-database/"],
      ["检索与排序", "rag/retrieval-ranking/"],
      ["RAG 评估与进阶", "rag/rag-evaluation-advanced/"],
    ],
  },
  {
    id: "memory",
    title: "Memory",
    items: [
      ["Memory 总览", "memory/overview/"],
      ["短期记忆与 State", "memory/short-term-state/"],
      ["长期记忆与 Store", "memory/long-term-store/"],
      ["三类长期记忆", "memory/memory-types/"],
      ["记忆压缩策略", "memory/compression/"],
      ["写入时机与存储", "memory/write-storage/"],
    ],
  },
  {
    id: "evaluation",
    title: "Agent Evaluation",
    items: [
      ["Task Success", "evaluation/task-success/"],
      ["Rubric", "evaluation/rubric/"],
      ["LLM-as-Judge", "evaluation/llm-as-judge/"],
      ["Faithfulness", "evaluation/faithfulness/"],
      ["Answer Relevance", "evaluation/answer-relevance/"],
      ["Recall@K", "evaluation/recall-at-k/"],
      ["MRR", "evaluation/mrr/"],
      ["Tool Call Accuracy", "evaluation/tool-call-accuracy/"],
      ["Trajectory Evaluation", "evaluation/trajectory-evaluation/"],
    ],
  },
  {
    id: "marl",
    title: "多智能体研究",
    items: [
      ["MARL 基础", "marl/marl-basics/"],
      ["MAT", "marl/mat/"],
      ["SMAC", "marl/smac/"],
      ["Attention Residual", "marl/attention-residual/"],
    ],
  },
  {
    id: "coding",
    title: "编程基础",
    items: [
      ["Python", "coding/python/"],
      ["Java", "coding/java/"],
      ["LeetCode", "coding/leetcode/"],
    ],
  },
];

export function noteHref(path) {
  return sitePath(`notes/${path}`);
}

export const placeholderNotes = Object.fromEntries(
  noteSections.flatMap((section) =>
    section.items.map(([title, path]) => [
      path.replace(/\/$/, ""),
      {
        title,
        section: section.title,
        href: noteHref(path),
      },
    ]),
  ),
);
