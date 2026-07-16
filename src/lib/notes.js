import { sitePath } from "./site.js";

export const standaloneNotes = [
  ["AI 概念坐标系", "agent/ai-concept-coordinate-system/"],
];

export const noteSections = [
  {
    id: "agent",
    title: "Agent 基础",
    items: [
      ["Agent 是什么", "agent/what-is-agent/"],
      ["ReAct", "agent/react/"],
      ["Plan-and-Execute", "agent/plan-and-execute/"],
      ["Reflection", "agent/reflection/"],
      ["Tool Use", "agent/tool-use/"],
      ["Agent Harness", "agent/agent-harness/"],
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
      ["Embedding", "rag/embedding/"],
      ["Vector Database", "rag/vector-database/"],
      ["Hybrid Retrieval", "rag/hybrid-retrieval/"],
      ["Weighted RRF", "rag/weighted-rrf/"],
      ["LLM Rerank", "rag/llm-rerank/"],
      ["RAG Evaluation", "rag/rag-evaluation/"],
    ],
  },
  {
    id: "memory",
    title: "Memory",
    items: [
      ["Short-term Memory", "memory/short-term-memory/"],
      ["Long-term Memory", "memory/long-term-memory/"],
      ["Mem0", "memory/mem0/"],
      ["Letta", "memory/letta/"],
      ["Zep", "memory/zep/"],
    ],
  },
  {
    id: "evaluation",
    title: "Agent Evaluation",
    items: [
      ["LLM-as-Judge", "evaluation/llm-as-judge/"],
      ["Rubric", "evaluation/rubric/"],
      ["Faithfulness", "evaluation/faithfulness/"],
      ["Answer Relevance", "evaluation/answer-relevance/"],
      ["Recall@K", "evaluation/recall-at-k/"],
      ["MRR", "evaluation/mrr/"],
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
      ["数据结构", "coding/data-structures/"],
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
