import { describe, expect, it } from 'vitest';

import { aboutMarkdown } from '../about';

describe('about data', () => {
  it('exports aboutMarkdown as a string', () => {
    expect(typeof aboutMarkdown).toBe('string');
    expect(aboutMarkdown.length).toBeGreaterThan(0);
  });

  it('contains the about section', () => {
    expect(aboutMarkdown).toContain('# 关于我');
    expect(aboutMarkdown).toContain('赖俊彦');
    expect(aboutMarkdown).toContain('广东工业大学');
  });

  it('contains the likes section', () => {
    expect(aboutMarkdown).toContain('# 我喜欢');
    expect(aboutMarkdown).toContain('唱歌');
    expect(aboutMarkdown).toContain('美食');
  });

  it('contains the searching section', () => {
    expect(aboutMarkdown).toContain('# 我正在寻找');
    expect(aboutMarkdown).toContain('属于自己的方向');
  });

  it('contains properly formatted headers', () => {
    const headerRegex = /^#+ .+$/gm;
    const headers = aboutMarkdown.match(headerRegex);

    expect(headers).not.toBeNull();
    expect(headers!.length).toBeGreaterThanOrEqual(3);
  });
});
