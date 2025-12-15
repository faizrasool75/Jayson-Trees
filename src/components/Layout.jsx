import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import MobileMenu from "./MobileMenu";
import ScrollProgress from "./ScrollProgress";
import ScrollToTop from "./ScrollToTop";

const sectionIds = {
  home: "home",
  about: "about",
  "why-us": "why-us",
  gallery: "gallery",
  contact: "contact",
};

const scrollToSection = (target) => {
  // For why-us, try to find the marker first, fallback to about section
  if (target === "why-us") {
    const whyUsElement = document.getElementById("why-us");
    if (whyUsElement) {
      whyUsElement.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    // Fallback to about section
    const aboutElement = document.getElementById("about");
    if (aboutElement) {
      aboutElement.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
  }
  
  const id = sectionIds[target];
  if (!id) {
    return;
  }
  const element =
    typeof document !== "undefined" ? document.getElementById(id) : null;
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [pendingScrollTarget, setPendingScrollTarget] = useState(null);
  const [activeSection, setActiveSection] = useState("home");
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (target) => {
    setMenuOpen(false);
    setActiveSection(target);

    // Handle Services page navigation
    if (target === "services") {
      if (location.pathname !== "/services") {
        navigate("/services");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    // If we're on Services page and clicking other links, go to home first
    if (location.pathname === "/services") {
      setPendingScrollTarget(target);
      navigate("/");
      return;
    }

    // We're on home page, scroll to the section
    scrollToSection(target);
  };

  useEffect(() => {
    if (location.pathname === "/" && pendingScrollTarget) {
      // Small delay to ensure page has loaded and DOM is ready
      const timer = setTimeout(() => {
        scrollToSection(pendingScrollTarget);
        setActiveSection(pendingScrollTarget);
        setPendingScrollTarget(null);
      }, 300);
      
      return () => clearTimeout(timer);
    }
  }, [location.pathname, pendingScrollTarget]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Active section detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      
      // Check sections from bottom to top
      const sections = [
        { id: "contact", key: "contact" },
        { id: "gallery", key: "gallery" },
        { id: "why-us", key: "why-us" },
        { id: "home", key: "home" },
      ];
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = window.scrollY + rect.top;
          
          if (scrollPosition >= elementTop) {
            setActiveSection(section.key);
            return;
          }
        }
      }
      
      setActiveSection("home");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (location.pathname === "/services") {
      setActiveSection("services");
    } else if (location.pathname === "/") {
      // Re-detect active section on home page
      const handleScroll = () => {
        const scrollPosition = window.scrollY + 150;
        const sections = [
          { id: "contact", key: "contact" },
          { id: "gallery", key: "gallery" },
          { id: "why-us", key: "why-us" },
          { id: "home", key: "home" },
        ];
        
        for (const section of sections) {
          const element = document.getElementById(section.id);
          if (element) {
            const rect = element.getBoundingClientRect();
            const elementTop = window.scrollY + rect.top;
            
            if (scrollPosition >= elementTop) {
              setActiveSection(section.key);
              return;
            }
          }
        }
        setActiveSection("home");
      };
      handleScroll();
    }
  }, [location.pathname]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const selectors = "h1,h2,h3,h4,h5,h6,p,button,img,div[class*='card']";
    const elements = document.querySelectorAll(selectors);
    if (!elements.length) return;

    const animationClasses = ["fade-up", "fade-left", "fade-right", "fade-zoom", "fade-rotate"];

    elements.forEach((el, index) => {
      // Skip if already animated or is a leaf image
      if (el.classList.contains("scroll-animate") || el.classList.contains("leaf-float")) return;
      
      // Skip if parent has scroll-animate (avoid nested animations)
      if (el.closest(".scroll-animate")) return;
      
      // Skip spans inside buttons/links (they're usually decorative)
      if (el.tagName === "SPAN" && (el.closest("button") || el.closest("a"))) return;
      
      // Choose animation based on element type and position
      let animationClass;
      if (el.tagName === "H1" || el.tagName === "H2") {
        animationClass = "fade-up";
      } else if (el.tagName === "BUTTON") {
        animationClass = "fade-zoom";
      } else if (el.tagName === "IMG" && !el.closest("header")) {
        animationClass = "fade-rotate";
      } else {
        animationClass = animationClasses[index % animationClasses.length];
      }
      
      el.classList.add("scroll-animate", animationClass);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
            // Add slight delay for smoother appearance
            setTimeout(() => {
              entry.target.classList.add("is-visible");
            }, 100);
            observer.unobserve(entry.target);
          }
        });
      },
      { 
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [location.pathname]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const leaves = document.querySelectorAll('img[src*="leaf"]');
    if (!leaves.length) return;

    leaves.forEach((leaf, index) => {
      leaf.classList.add("leaf-float", "leaf-item");
      leaf.dataset.leafIndex = index.toString();
    });

    let rafId;
    const updateLeaves = () => {
      const scrollY = window.scrollY;
      const time = Date.now() * 0.001;
      const range = window.innerWidth < 640 ? 20 : 40;
      
      leaves.forEach((leaf) => {
        const index = Number.parseInt(leaf.dataset.leafIndex || "0", 10);
        
        // More dynamic floating with combined sine waves
        const offsetY = Math.sin((scrollY + index * 100) / 100 + time * 0.6) * range;
        const offsetX = Math.cos((scrollY + index * 150) / 130 + time * 0.4) * (range * 0.6);
        const rotation = Math.sin((scrollY + index * 80) / 80 + time * 0.5) * 8;
        
        leaf.style.setProperty("--leaf-scroll", `${offsetY}px`);
        leaf.style.setProperty("--leaf-scroll-x", `${offsetX}px`);
        leaf.style.setProperty("--leaf-scroll-rotate", `${rotation}deg`);
      });
    };

    const handleScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        updateLeaves();
        rafId = 0;
      });
    };

    // Continuous animation
    const animate = () => {
      updateLeaves();
      requestAnimationFrame(animate);
    };
    animate();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <ScrollProgress />
      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        onNavigate={handleNavigate}
        activeSection={activeSection}
      />
      <Header
        onNavigate={handleNavigate}
        onMenuToggle={() => setMenuOpen((prev) => !prev)}
        isMenuOpen={menuOpen}
        activeSection={activeSection}
      />
      <ScrollToTop />
      <Outlet context={{ onNavigate: handleNavigate, activeSection }} />
    </>
  );
};

export default Layout;

