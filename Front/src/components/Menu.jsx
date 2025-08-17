import React, { useState } from 'react'
import {data} from '../restApi.json'

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Breakfast', 'Lunch', 'Dinner'];
  
  const filteredDishes = activeCategory === 'All' 
    ? data[0].dishes 
    : data[0].dishes.filter(dish => dish.category === activeCategory);

  return (
    <section className="section" style={{
      background: "white"
    }} id='menu'>
      
      <div className="container">
        {/* Section Header */}
        <div style={{
          textAlign: "center",
          marginBottom: "80px"
        }}>
          <span style={{
            fontSize: "16px",
            fontWeight: "600",
            color: "#ff6b6b",
            textTransform: "uppercase",
            letterSpacing: "2px",
            marginBottom: "15px",
            display: "block"
          }}>
            Our Menu
          </span>
          
          <h2 style={{
            fontSize: "2.5rem",
            fontWeight: "600",
            color: "#2d3748",
            marginBottom: "20px",
            lineHeight: "1.3"
          }}>
            Popular 
            <span style={{ color: "#ff6b6b" }}>
              Dishes
            </span>
          </h2>
          
          <p style={{
            fontSize: "1rem",
            color: "#666",
            maxWidth: "600px",
            margin: "0 auto",
            lineHeight: "1.6"
          }}>
            Discover our chef's signature creations, crafted with premium ingredients and served with artistic presentation.
          </p>
        </div>
        
        {/* Category Filter */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginBottom: "60px",
          flexWrap: "wrap"
        }} className="category-filters">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={activeCategory === category ? "btn btn-primary" : "btn btn-outline"}
              style={{
                padding: "10px 20px",
                fontSize: "0.9rem"
              }}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Dishes Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "30px",
          alignItems: "stretch"
        }}>
          {filteredDishes.map((element, index) => (
            <div 
              key={element.id}
              style={{
                background: "white",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 5px 15px rgba(0, 0, 0, 0.08)",
                transition: "transform 0.2s ease",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
              }}
            >
              {/* Image Container */}
              <div style={{
                position: "relative",
                height: "200px",
                overflow: "hidden"
              }}>
                <img 
                  src={element.image} 
                  alt={element.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                  }}
                />
                
                {/* Category Badge */}
                <div style={{
                  position: "absolute",
                  top: "15px",
                  right: "15px",
                  background: "#ff6b6b",
                  color: "white",
                  padding: "6px 12px",
                  borderRadius: "12px",
                  fontSize: "11px",
                  fontWeight: "500",
                  textTransform: "uppercase"
                }}>
                  {element.category}
                </div>
                
              </div>
              
              {/* Content */}
              <div style={{
                padding: "20px"
              }}>
                <h3 style={{
                  fontSize: "1.2rem",
                  fontWeight: "600",
                  color: "#2d3748",
                  marginBottom: "12px",
                  textAlign: "center"
                }}>
                  {element.title}
                </h3>
                
                <p style={{
                  fontSize: "0.9rem",
                  color: "#666",
                  lineHeight: "1.5",
                  textAlign: "center",
                  marginBottom: "20px"
                }}>
                  A delicious {element.category.toLowerCase()} dish crafted with premium ingredients and served with artistic presentation.
                </p>
                
                {/* Rating */}
                <div style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "20px"
                }}>
                  <div style={{
                    display: "flex",
                    gap: "2px"
                  }}>
                    {[...Array(5)].map((_, i) => (
                      <span key={i} style={{ color: "#ffd700", fontSize: "0.9rem" }}>★</span>
                    ))}
                  </div>
                  <span style={{
                    fontSize: "12px",
                    color: "#666",
                    fontWeight: "400"
                  }}>
                    4.9 (127 reviews)
                  </span>
                </div>
                
                {/* Price and Order Button */}
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}>
                  <div style={{
                    fontSize: "1.3rem",
                    fontWeight: "600",
                    color: "#ff6b6b"
                  }}>
                    ${(15 + index * 3).toFixed(2)}
                  </div>
                  
                  <button className="btn btn-primary" style={{
                    fontSize: "0.85rem",
                    padding: "10px 20px"
                  }}>
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div style={{
          textAlign: "center",
          marginTop: "60px"
        }}>
          <div style={{
            background: "linear-gradient(135deg, #667eea, #764ba2)",
            borderRadius: "12px",
            padding: "40px 30px",
            color: "white"
          }}>
            
            <h3 style={{
              fontSize: "2rem",
              fontWeight: "600",
              marginBottom: "15px"
            }}>
              Can't Decide?
            </h3>
            
            <p style={{
              fontSize: "1rem",
              marginBottom: "25px",
              opacity: "0.9"
            }}>
              Let our chef surprise you with today's special selection!
            </p>
            
            <a href="#reservation" className="btn" style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "white",
              color: "#667eea",
              fontSize: "1rem"
            }}>
              Chef's Choice
              <span style={{ fontSize: "1.2rem" }}>🍽️</span>
            </a>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @media (max-width: 768px) {
          .container > div:last-child {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          
          h2 {
            font-size: 2rem !important;
          }
        }
        
        @media (max-width: 480px) {
          h2 {
            font-size: 1.8rem !important;
          }
        }
      `}</style>
    </section>
  )
}

export default Menu
