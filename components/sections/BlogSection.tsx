import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import { blogPosts } from "@/data/blog-posts";

export function BlogSection() {
  const featured = blogPosts.slice(0, 3);

  return (
    <section className="py-20 bg-[#F8F9FA]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-12 animate-on-scroll">
          <span className="eyebrow-label">Expert Guides</span>
          <h2 className="heading-section text-[#1a2975]">
            From Our
            <br />
            <span className="font-accent italic text-[0.75em] tracking-[0.05em] text-[#E31837]">
              Blog
            </span>
          </h2>
          <div className="silver-line mt-4" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
          {featured.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block bg-white rounded-xl overflow-hidden border border-[#E5E5E5] hover:border-[#1B4FE4]/30 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={post.featuredImage}
                  alt={post.featuredImageAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-[#1B4FE4] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold text-[#1C1C1E] mb-2 group-hover:text-[#1B4FE4] transition-colors line-clamp-2 leading-snug">
                  {post.title}
                </h3>
                <p className="text-[#9CA3AF] text-sm line-clamp-2 mb-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-[#9CA3AF]">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime} min read
                  </span>
                  <span className="text-[#1B4FE4] font-semibold group-hover:underline flex items-center gap-1">
                    Read More
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-10 animate-on-scroll">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#1B4FE4] font-bold text-sm uppercase tracking-wider hover:gap-3 transition-all"
          >
            View All Articles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
