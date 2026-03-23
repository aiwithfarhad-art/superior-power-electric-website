import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import { blogPosts } from "@/data/blog-posts";

export function BlogSection() {
  const featured = blogPosts.slice(0, 3);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-12 animate-on-scroll">
          <span className="eyebrow-label">Expert Guides</span>
          <h2 className="font-heading text-[#1C1C1E] font-black uppercase text-3xl sm:text-4xl lg:text-[56px] tracking-tight leading-[1.05]">
            From Our Blog
          </h2>
          <div className="silver-line mt-4" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
          {featured.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block bg-white rounded-xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_32px_rgba(0,0,0,0.04)] hover:shadow-[0_2px_6px_rgba(0,0,0,0.06),0_12px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300"
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
                  <span className="bg-[#E31837] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold text-[#1C1C1E] mb-2 group-hover:text-[#E31837] transition-colors line-clamp-2 leading-snug">
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
                  <span className="text-[#E31837] font-semibold group-hover:underline flex items-center gap-1">
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
            className="inline-flex items-center gap-2 text-[#E31837] font-bold text-sm uppercase tracking-wider hover:gap-3 transition-all"
          >
            View All Articles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
