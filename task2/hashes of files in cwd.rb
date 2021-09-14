if __FILE__ == $PROGRAM_NAME
  require "openssl"
  for fn in Dir.entries(Dir.pwd())
    if (!File.file?(fn))
      next
    end
    hash = OpenSSL::Digest.digest("SHA3-256", File.binread(fn))
    print(fn, " ", hash.unpack1("H*"), "\n")
  end
end
