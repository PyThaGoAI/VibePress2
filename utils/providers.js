export const PROVIDERS = {
  "fireworks-ai": {
    name: "Fireworks AI",
    max_tokens: 131_000,
    id: "fireworks-ai",
  },
  nebius: {
    name: "Nebius AI Studio",
    max_tokens: 131_000,
    id: "nebius",
  },
  sambanova: {
    name: "SambaNova",
    max_tokens: 8_000,
    id: "sambanova",
  },
  novita: {
    name: "NovitaAI",
    max_tokens: 16_000,
    id: "novita",
  },
  hyperbolic: {
    name: "Hyperbolic",
    max_tokens: 131_000,
    id: "hyperbolic",
  },
  gemini: {
    name: "Gemini 2.5",
    max_tokens: 131_000,
    id: "gemini",
  },
};

export const MODELS = [
  {
    value: "deepseek-ai/DeepSeek-V3-0324",
    label: "DeepSeek V3 0324",
    providers: ["fireworks-ai", "nebius", "sambanova", "novita", "hyperbolic", "gemini"],
    autoProvider: "novita",
  },
  {
    value: "deepseek-ai/DeepSeek-R1-0528",
    label: "DeepSeek R1 0528",
    providers: ["fireworks-ai", "novita", "hyperbolic", "nebius", "gemini"],
    autoProvider: "novita",
    isNew: true,
    isThinker: true,
  },
  {
    value: "gemini/Gemini-2.5",
    label: "Gemini 2.5",
    providers: ["gemini"],
    autoProvider: "gemini",
  },
];
