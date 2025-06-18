"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";
import { ModeToggle } from "@/components/dropdowns/switch-dark-mode-dropdown";
import { useAuth } from "../hooks/useAuth";
import { useState } from "react";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export function Login() {
  const t = useTranslations('common');
  const tl = useTranslations('login');
  const { login, isLoading, error } = useAuth();
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(credentials);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="min-h-screen flex">
        {/* Left side - Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hidden lg:flex lg:w-2/3 bg-primary items-center justify-center"
        >
          <motion.div 
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative w-64 h-64"
          >
            <Image
              src="/logos/brand.png"
              alt="Logo"
              fill
              className="object-contain"
              priority
              sizes="512px"
            />
          </motion.div>
        </motion.div>

        {/* Right side - Login Form */}
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-1/3 flex items-center justify-center p-8"
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full max-w-md"
          >
            <Card className="w-full">
              <CardHeader>
               <div className="flex flex-rowgrep-2 ">
               <ModeToggle/>
               <LanguageSwitcher />
                </div> 
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <CardTitle className="text-2xl font-bold text-center">{t('login')}</CardTitle>
                  <CardDescription className="text-center">
                    {tl("subTitle")}
                  </CardDescription>
                </motion.div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <motion.div 
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex flex-col gap-2"
                  >
                    <label htmlFor="username" className="text-sm font-medium">
                     {tl("labelUsername")}
                    </label>
                    <Input
                      id="username"
                      type="text"
                      placeholder={tl("PlaceholderUsername")}
                      className="w-full"
                      value={credentials.username}
                      onChange={(e) => setCredentials(prev => ({ ...prev, username: e.target.value }))}
                      autoComplete="username"
                    />
                  </motion.div>
                  <motion.div 
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="flex flex-col gap-2"
                  >
                    <label htmlFor="password" className="text-sm font-medium">
                    {tl("labelPassword")}
                    </label>
                    <Input
                      id="password"
                      type="password"
                      placeholder={tl("PlaceholderPassword")}
                      className="w-full"
                      value={credentials.password}
                      onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
                      autoComplete="current-password"
                    />
                  </motion.div>
                  {error && (
                    <div className="text-red-500 text-sm">
                      {error.message}
                    </div>
                  )}
                </div>
              </CardContent>
              <CardFooter>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="w-full"
                >
                  <Button 
                    className="w-full" 
                    type="submit"
                    disabled={isLoading}
                  >
                    {isLoading ? "กำลังเข้าสู่ระบบ..." : t('login')}
                  </Button>
                </motion.div>
              </CardFooter>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </form>
  );
}